const Joi = require('joi');

const validation = {
  validator: Joi.object({
    currencyName: Joi.string().alphanum().max(3).required(),
    high: Joi.number().precision(4).required(),
    low: Joi.number().precision(4).required(),
    date: Joi.string().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s([0-9]+(:[0-9]+)+)$/).required(),
  }),
  hasInvalidField: (object) => {
    Object.keys(object).map((key) => {
      try {
        validation.validator.validate(
          {
            currencyName: object[key].code,
            high: object[key].high,
            low: object[key].low,
            date: object[key].create_date,
          },
        );
      } catch (err) {
        return 'error';
      }
    }).includes('error');
  },
};

module.exports = validation;
