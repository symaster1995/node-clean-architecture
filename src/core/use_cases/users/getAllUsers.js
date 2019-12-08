'use strict'

class GetAllUsers {
    constructor({ userRepository }) {
        this.userRepository = userRepository
    }

    get() {
        return this.userRepository.getAllUsers()
    }
}

export { GetAllUsers }