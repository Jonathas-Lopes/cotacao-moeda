const mongoose = require('mongoose');
const CurrencySchema = require('../schema/currencySchema');
const CurrencyModel = mongoose.model('currency', CurrencySchema);
const bacenValidator = require('../../utils/validators/bacenValidator');
const { array } = require('joi');

const currency = {

  listCurrencies: async function (aggregate) {

    if (aggregate) {
      return await CurrencyModel.aggregate([

        {
          $project: {
            currencyName: '$currencyName',
            low: {
              $slice: ['$low', -1]
            },
            high: {
              $slice: ['$high', -1]
            },
            date: {
              $slice: ['$date', -1]
            }
          }
        }
      ]);

    }
    else
      return await CurrencyModel.find({});
  },
  insertCurrency: async function (currencyNames, currencyObj) {

    if (!bacenValidator.hasInvalidField(currencyObj)) {

      const currencyList = Array.from(await CurrencyModel.find({ currencyName: { $in: currencyNames } }));
      const currencyListToBeInserted = currencyNames
        .filter(currencyName => currencyList.find(item => item.currencyName === currencyName) == null)
        .map(currencyName => ({
          currencyName,
          high: [currencyObj[currencyName].high],
          low: [currencyObj[currencyName].low],
          date: [currencyObj[currencyName].create_date],
        }));

      const currencyListToBeUpdated = currencyList.map(item => ({
        updateOne: {
          filter: { currencyName: item.currencyName },
          update: {
            $push: {
              high: currencyObj[item.currencyName].high,
              low: currencyObj[item.currencyName].low,
              date: currencyObj[item.currencyName].create_date
            }
          },
        }
      }));

      const registers = await CurrencyModel.insertMany(currencyListToBeInserted);

      await CurrencyModel.bulkWrite(currencyListToBeUpdated);

    }

  },
  CurrencyModel: CurrencyModel

};

module.exports = currency;