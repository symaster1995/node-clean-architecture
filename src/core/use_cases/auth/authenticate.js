'use strict'

const authenticate = ({ validator, loginSchema, userRepository, passwordEncrypt, jwtManager }) => {

    const login = async(data) => {
        const validate = validator.validate(data, loginSchema)
        if (validate) return validate

        const foundUser = await userRepository.findUserByWhere({ email: data.email })

        if (foundUser) {
            const compare = await passwordEncrypt.compare(data.password, foundUser.password)

            if (!compare) {
                return {
                    error: 'Wrong credential'
                }
            } else {

                const payload = {
                    id: foundUser.id,
                    name: foundUser.name,
                    btcId: foundUser.btcId,
                    ethId: foundUser.ethId
                }

                const signJwt = await jwtManager.generate(payload)

                return {
                    user: foundUser,
                    token: signJwt 
                }
            }
        } else {
            return {
                error: 'No user found'
            }
        }
    }

    return {
        login
    }
}

export { authenticate }