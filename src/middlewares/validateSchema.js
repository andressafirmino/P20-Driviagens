export function validateSchema(schema) {
    return (req, res, next) => {
        const validate = schema.validate(req.body, { abortEarly: false });
        if (validate.error) {
            const errors = validate.error.details.map(detail => detail.message);
            return res.status(422).send({ message: errors });
        }
        next();
    }
}

export function validadeQuerySchema(schema) {
    return (req, res, next) => {
        const smallerDate = req.query['smaller-date'];
        console.log(typeof smallerDate)
        if (typeof smallerDate !== 'undefined' && smallerDate !== '') {
        
            if (!/^\d{2}-\d{2}-\d{4}$/.test(smallerDate)) {
                return res.status(422).send({ message: ['"smaller-date" must be in the format "DD-MM-YYYY"'] });
            }
            req.query['smaller-date'] = smallerDate;
        }
        
        console.log(typeof req.query['smaller-date'])

        const validate = schema.validate(req.query, { abortEarly: false });
        if (validate.error) {
            console.log(validate.error)
            const errors = validate.error.details.map(detail => detail.message);
            console.log(errors)
            return res.status(422).send({ message: errors });
        }
        next();
    }
}