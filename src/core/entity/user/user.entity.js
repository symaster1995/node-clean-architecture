const buildUserEntity = ({ validator, userSchema }) => {

    const userEntity = ({
        id,
        firstName,
        lastName,
        email,
        password,
        createdAt = Date.now(),
        updatedAt = Date.now()
    } = {}) => {

        const validate = validator.validate({ firstName, lastName, email, password }, userSchema.create)

        if (validate) return validate

        return {
            user: Object.freeze({
                getFirstName: () => firstName,
                getLastName: () => lastName,
                getEmail: () => email,
                getPassword: () => password,
                getCreatedAt: () => createdAt,
                getUpdatedAt: () => updatedAt
            })
        }
    }

    return userEntity
}

export default buildUserEntity