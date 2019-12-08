'use strict'

class PutUser {
    constructor({ userRepository, userSchema }) {
        this.userRepository = userRepository
        this.userSchema = userSchema
    }

    put(data, id) {

        const exists = this.userRepository.getUser(id)

        if (exists) {

            let updatedUser = Object.assign({}, ...Object.keys(data).map(key => ({
                [key]: data[key]
            })))

            updatedUser.updatedAt = Date.now()

            Object.freeze(updatedUser)

            return this.userRepository.putUser(updatedUser, id)
        }
    }
}

export { PutUser }

//         let newUser = {
//             name: user.getName(),
//             password: user.getPassword(),
//             email: user.getEmail(),
//             maxAmount: user.getMaxAmount(),
//             createdAt: user.getCreatedAt(),
//             updatedAt: user.getUpdatedAt()
//         }

//         return this.userRepository.postUser(newUser)
//     }