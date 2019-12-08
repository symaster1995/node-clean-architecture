class UserRepository {
    constructor({ userProvider }) {
        this.userProvider = userProvider
    }

    getAllUsers() {
        return this.userProvider.getAllUsers()
    }

    getUser(userId) {
        return this.userProvider.getUser(userId)
    }

    postUser(data) {
        return this.userProvider.postUser(data)
    }

    putUser(data, id) {
        return this.userProvider.putUser(data, id)
    }

    findUserByWhere(query) {
        return this.userProvider.findUserByWhere(query)
    }

}

export default UserRepository