class UserController {
    constructor({ getAllUsers, getUser, postUser, putUser, userSerializer, response }) {
        this.getAllUsers = getAllUsers
        this.getUser = getUser
        this.postUser = postUser
        this.putUser = putUser
        this.userSerializer = userSerializer
        this.response = response
    }

    async listUsers(req, res) {
        try {
            const users = await this.getAllUsers.get()
            if (users.length > 0) {
                const serialized = users.map(this.userSerializer.serialize)
                return this.response.setSuccess(res, 200, 'users retrieved', serialized)
            } else {
                return this.response.setSuccess(res, 200, 'no users', [])
            }
        } catch (error) {
            console.log(error, 'err')
        }
    }

    async showUser(req, res) {
        try {
            const user = await this.getUser.get(req.params.id)
            if (user) {
                const serialized = this.userSerializer.serialize(user)
                return this.response.setSuccess(res, 200, 'user retrieved', serialized)
            } else {
                return this.response.setSuccess(res, 200, 'no users found', [])
            }
        } catch (error) {
            console.log(error.message, 'err')
        }
    }

    async createUser(req, res) {
        try {

            const { error, user } = await this.postUser.post(req.body)

            if (error) return this.response.setError(res, 400, error)

            const serialized = this.userSerializer.serialize(user)

            return this.response.setSuccess(res, 201, 'user created', serialized)

        } catch (error) {
            console.log(error, 'err')
        }
    }


    async updateUser(req, res) {
        try {

            if (req.params.id != req.user.id) return this.response.setError(res, 400, 'you do not have privileged to update this user')
                // TODO: Pass if admin

            const { error, user } = await this.putUser.put(req.body, req.params.id)

            if (error) return this.response.setError(res, 400, error)

            const serialized = this.userSerializer.serialize(user)

            return this.response.setSuccess(res, 201, 'user updated', serialized)

        } catch (error) {
            console.log(error, 'err')
        }
    }

}

export default UserController