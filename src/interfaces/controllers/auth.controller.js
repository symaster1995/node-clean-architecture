import * as argon2 from 'argon2'

class AuthController {
    constructor({ authenticate, response, userSerializer, passwordEncrypt }) {
        this.authenticate = authenticate
        this.response = response
        this.userSerializer = userSerializer
        this.passwordEncrypt = passwordEncrypt
    }

    async login(req, res) {
        try {
            const { error, user, token } = await this.authenticate.login(req.body)

            if (error) return this.response.setError(res, 400, error)

            const serialized = this.userSerializer.serialize(user)

            return this.response.setSuccess(res, 200, 'user logged in', { user: serialized, token })

        } catch (error) {
            console.log(error)
        }
    }

    async hashTest(req, res) {
        try {
            
            const hashedPassword = await this.passwordEncrypt.hashPassword2(req.body.password) 
            // const hashedPassword = await argon2.hash(req.body.password)
            console.log(hashedPassword, 'wat')

            return this.response.setSuccess(res, 200, 'password hashed', { hashed: hashedPassword })
        } catch (error) {
            console.log(error)
        }
        
    }

}

export default AuthController