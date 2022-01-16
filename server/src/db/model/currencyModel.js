const mongoose = require('mongoose');
const CurrencySchema = require('../schema/currencySchema');

const CurrencyModel = mongoose.model('currency', CurrencySchema);
const bacenValidator = require('../../utils/validators/bacenValidator');

const currency = {

  async listCurrencies(aggregate) {
    if (aggregate) {
      return CurrencyModel.aggregate([

        {
          $project: {
            currencyName: '$currencyName',
            low: {
              $slice: ['$low', -1],
            },
            high: {
              $slice: ['$high', -1],
            },
            date: {
              $slice: ['$date', -1],
            },
          },
        },
      ]);
    } return CurrencyModel.find({});
  },
  async insertCurrency(currencyObj) {
    if (!bacenValidator.hasInvalidField(currencyObj)) {
      const currencyList = Array.from(await CurrencyModel
        .find({ currencyName: { $in: Object.keys(currencyObj) } }));

      const currencyListToBeUpdated = currencyList.map((item) => ({
        updateOne: {
          filter: { currencyName: item.currencyName },
          update: {
            $push: {
              high: currencyObj[item.currencyName].high,
              low: currencyObj[item.currencyName].low,
              date: currencyObj[item.currencyName].create_date,
            },
          },
        },
      }));

      await CurrencyModel.bulkWrite(currencyListToBeUpdated);
    }
  },
  CurrencyModel,

};

module.exports = currency;
