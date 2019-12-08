const buildUserEntity = ({ validator, userSchema, passwordEncrypt }) => {

    const userEntity = ({
        id,
        name,
        email,
        password,
        createdAt = Date.now(),
        updatedAt = Date.now()
    } = {}) => {

        const validate = validator.validate({ name, email, password }, userSchema.create)

        if (validate) return validate

        return {
            user: Object.freeze({
                getName: () => name,
                getEmail: () => email,
                getPassword: () => passwordEncrypt.hashPassword(password),
                getMaxAmount: () => 1000,
                getCreatedAt: () => createdAt,
                getUpdatedAt: () => updatedAt
            })
        }
    }

    return userEntity
}

export default buildUserEntity