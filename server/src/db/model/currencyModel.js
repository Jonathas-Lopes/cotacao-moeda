const mongoose = require("mongoose");
const CurrencySchema = require("../schema/currencySchema")
const CurrencyModel = mongoose.model("currency", CurrencySchema);


const currency = {
    
    find: async function(){
        return await CurrencyModel.find({}).limit(50)
    },
    insert: async function (currencyNames, currencyObj) {
        const schemas = currencyNames.map((key, index) => {
            const values = {
                'currencyName': currencyObj[key].code,
                'high': new Array(currencyObj[key].high),
                'low': new Array(currencyObj[key].low),
                'date': new Array(currencyObj[key].create_date)
            }
            return values
        })

        for (let schema in schemas) {


            const currency = await CurrencyModel.findOne({ currencyName: schemas[schema].currencyName })



            if (!currency) {
                await CurrencyModel.create(schemas[schema]);
            }
            else {


                await CurrencyModel.updateOne(
                    { currencyName: schemas[schema].currencyName },
                    { $push: { high: schemas[schema].high } }


                );
                await CurrencyModel.updateOne(
                    { currencyName: schemas[schema].currencyName },
                    { $push: { low: schemas[schema].low }, }


                );
                await CurrencyModel.updateOne(
                    { currencyName: schemas[schema].currencyName },
                    { $push: { date: schemas[schema].date }, }


                );

            }

        }





    }
}



module.exports = currency;