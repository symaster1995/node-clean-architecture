import Joi from 'joi'

class Validator {
    constructor(option) {

    }

    validate(data, schema) {
        
        const { error } = Joi.validate(data, schema, { abortEarly: false })

        if (error) {
            let message = error.details.map(el => el.message).join('\n')
            return {
                error: message
            }
        }

        return
    }
}

export default Validator