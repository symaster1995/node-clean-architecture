let Joi = require('joi')

const create = Joi.object().keys({
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).email().required(),
    password: Joi.string().min(3).max(255).required()
})

const update = Joi.object().keys({
    name: Joi.string().min(3).max(50).optional(),
    email: Joi.string().min(3).max(50).optional()
})


const UserSchema = {
    create,
    update
}

export default UserSchema