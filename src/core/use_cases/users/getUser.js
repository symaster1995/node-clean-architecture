'use strict'

class GetUser {
    constructor({ userRepository }) {
        this.userRepository = userRepository
    }

    get(userId) {
        return this.userRepository.getUser(userId)
    }
}

export { GetUser }