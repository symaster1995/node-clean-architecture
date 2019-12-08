'use strict'
class PostUser {
    constructor({ userRepository, userEntity }) {
        this.userRepository = userRepository
        this.userEntity = userEntity
    }

    post(data) {
        
        const { error, user } = this.userEntity(data)
        if (error) return { error }

        let newUser = {
            name: user.getName(),
            password: user.getPassword(),
            email: user.getEmail(),
            maxAmount: user.getMaxAmount(),
            createdAt: user.getCreatedAt(),
            updatedAt: user.getUpdatedAt()
        }

        return this.userRepository.postUser(newUser)
    }
}

export { PostUser }