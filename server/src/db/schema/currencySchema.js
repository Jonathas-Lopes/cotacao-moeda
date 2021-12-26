const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CurrencySchema = new Schema({
  currencyName: {
    type: String,
    required: true,
    unique: true,
  },
  high: {
    type: [String],
    required: true,
  },
  low: {
    type: [String],
    required: true,
  },
  date: {
    type: [String],
    required: true,
  }
  
});



module.exports = CurrencySchema;