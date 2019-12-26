'use strict'
import jwt from 'jsonwebtoken'
import config from '../config/config';

class JwtManager {

    generate(payload){
        return jwt.sign(payload, config.jwtSecret)
    }

    decode(accessToken){
        return jwt.verify(accessToken, config.jwtSecret)
    }
    
}

export default JwtManager