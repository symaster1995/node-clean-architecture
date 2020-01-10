import * as argon2 from 'argon2'

class PasswordEncrypt {
    
    async hashPassword(inputPassword) {

        try {
            const hashedPassword = await argon2.hash(inputPassword)
            return hashedPassword
        } catch (error) {
            console.log(error, 'hashing argon error')
        }
    }

    async compare(inputPassword, hashedPassword) {

        const valid = await argon2.verify(hashedPassword, inputPassword)

        return valid ? true : false
    }
}

export default PasswordEncrypt