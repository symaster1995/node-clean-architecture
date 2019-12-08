class AuthController {
    constructor({ authenticate, response, userSerializer }) {
        this.authenticate = authenticate
        this.response = response
        this.userSerializer = userSerializer
    }

    async login(req, res) {
        try {
            const { error, user, token } = await this.authenticate.login(req.body)

            if (error) return this.response.setError(res, 400, error)

            const serialized = this.userSerializer.serialize(user)

            return this.response.setSuccess(res, 200, 'user created', { user: serialized, token })

        } catch (error) {
            console.log(error)
        }
    }

}

export default AuthController