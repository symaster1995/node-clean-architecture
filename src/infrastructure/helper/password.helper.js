import bcrypt from 'bcryptjs'

class PasswordEncrypt {
    constructor() {

    }

    hashPassword(password) {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        return hash
    }

    compare(inputPassword, hashedPassword){
        const compared = bcrypt.compare(inputPassword, hashedPassword).then(isMatch => {
            return isMatch ? true : false
        })
        
        return compared
    }
}

export default PasswordEncrypt