class UserProvider {
    constructor({ database }) {
        this.db = database.sequelize
        this.model = this.db.model('User')
    }

    async getAllUsers() {
        const users = await this.model.findAll()
        return users
    }

    async getUser(userId) {
        const user = await this.model.findByPk(userId)
        return user
    }

    async postUser(data) {
        const user = await this.model.findOrCreate({
                where: { email: data.email },
                attributes: {
                    exclude: ['password']
                },
                defaults: {
                    name: data.name,
                    maxAmount: data.maxAmount,
                    password: data.password,
                    createdAt: data.createdAt,
                    updatedAt: data.updatedAt
                }
            })
            .then(([user, created]) => {
                if (!created) {
                    return {
                        error: 'Email already in use'
                    }
                } else {
                    return {
                        user: user.get({ plain: true })
                    }
                }
            })
            .catch(error => {
                console.log(error, 'post error')
            })

        return user
    }

    async putUser(data, id) {

        const user = await this.model.findByPk(id)
            .then(user => {
                if (user) {
                    return user.update(data).then(updatedUser => { return updatedUser })
                } else {
                    return { error: 'user not found' }
                }
            })
            .catch(error => {
                console.log(error, 'provider error')
            })

        return { user }
    }

    async findUserByWhere(query) {

        const user = await this.model.findOne({ where: query })
            .then(user => {
                return user.get({ plain: true })
            })

        return user
    }
}

export default UserProvider