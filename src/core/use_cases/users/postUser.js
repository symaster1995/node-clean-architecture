'use strict'
class PostUser {
    constructor({ userRepository, userEntity, passwordEncrypt }) {
        this.userRepository = userRepository
        this.userEntity = userEntity
        this.passwordEncrypt = passwordEncrypt
    }

    async post(data) {

        const { error, user } = this.userEntity(data)
        if (error) return { error }

        const hashed = await this.passwordEncrypt.hashPassword(user.getPassword())

        let newUser = {
            firstName: user.getFirstName(),
            lastName: user.getLastName(),
            password: hashed,
            email: user.getEmail(),
            createdAt: user.getCreatedAt(),
            updatedAt: user.getUpdatedAt()
        }

        return await this.userRepository.postUser(newUser)
    }
}

export { PostUser }