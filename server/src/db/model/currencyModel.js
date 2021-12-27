const mongoose = require("mongoose");
const CurrencySchema = require("../schema/currencySchema")
const CurrencyModel = mongoose.model("currency", CurrencySchema);
const bacenValidator = require('../../utils/validators/bacenValidator')


const currency = {

    find: async function () {
        return await CurrencyModel.find({}).limit(50)
    },
    insert: async function (currencyNames, currencyObj) {
        const registers = currencyNames.map((key) => ({

            'currencyName': currencyObj[key].code,
            'high': new Array(currencyObj[key].high),
            'low': new Array(currencyObj[key].low),
            'date': new Array(currencyObj[key].create_date)
        }))

        if (!bacenValidator.validate(registers)) {
            for (let register in registers) {


                const currency = await CurrencyModel.findOne({ currencyName: registers[register].currencyName })



                if (!currency) {
                    await CurrencyModel.create(registers[register]);
                }
                else {


                    await CurrencyModel.updateOne(
                        { currencyName: registers[register].currencyName },
                        { $push: { high: registers[register].high, low: registers[register].low, date: registers[register].date } }


                    )
                }
            }
        }
    }
}



module.exports = currency;