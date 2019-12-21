import * as argon2 from 'argon2'

class PasswordEncrypt {

    async hashPassword(password) {

        const hashedPassword = await argon2.hash(password)
        return hashedPassword
    }

    async compare(inputPassword, hashedPassword){

        const valid = await argon2.verify(hashedPassword, inputPassword)

        return valid ? true : false
    }
}

export default PasswordEncrypt