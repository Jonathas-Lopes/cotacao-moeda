const Joi = require('joi')

const validation = {
    validator: Joi.object({
        'currencyName': Joi.string().alphanum().max(3).required(),
        'high': Joi.number().precision(4).required(),
        'low': Joi.number().precision(4).required(),
        'date': Joi.string().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s([0-9]+(:[0-9]+)+)$/).required()
    }),
    validate: (object) => {
        try {
            validation.validator.validate(object)
        }
        catch (err) {
            return err
        }
    }
}

module.exports = validation