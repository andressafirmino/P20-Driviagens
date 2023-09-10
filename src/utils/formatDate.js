import joi from "joi";

const customDateFormat = Joi.extend((joi) => ({
    type: 'customDate',
    base: joi.string(),
    messages: {
      'customDate.format': '{{#label}} deve estar no formato DD-MM-YYYY',
    },
    validate(value, helpers) {
      if (!/^\d{2}-\d{2}-\d{4}$/.test(value)) {
        return { value, errors: helpers.error('customDate.format') };
      }
    },
  }));