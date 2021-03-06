class UserProvider {
    constructor({ database }) {
        this.db = database.sequelize
        this.model = this.db.model('User')
        this.passwordModel = this.db.model('UserPassword')
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
                    firstName: data.firstName,
                    lastName: data.lastName,
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
                    const createdUser = user.get({ plain: true })
                    const authInsert = this.passwordModel.create(({
                        userId: createdUser.id,
                        password: data.password,
                        alg: "argon2",
                        createdAt: data.createdAt,
                        updatedAt: data.updatedAt
                    })).then(auth => {
                        if (!auth) {
                            return { error: 'password not saved' }
                        } else {
                            return {
                                user: createdUser
                            }
                        }

                    }).catch(error => {
                        console.log(error, 'password error')
                    })

                    return authInsert
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
                if (user) {
                    return user.get({ plain: true })
                } else {
                    return null
                }
            })
            .catch(error => {
                console.log(error, 'find user by query error')
            })

        return user
    }

    async findUserLogin(query) {

        const user = await this.model.findOne({
            where: query,
            attributes: ['id', 'UserPassword.password', 'email', 'createdAt', 'updatedAt'],
            include: [{
                model: this.passwordModel,
                required: true,
                attributes: []
            }],
            raw: true
        })
        return user
    }
}

export default UserProvider