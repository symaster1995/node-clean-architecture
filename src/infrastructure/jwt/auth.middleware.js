import Response from '../utils/response'
import JwtManager from './jwt.manager'
const authJwt = (req, res, next) => {
    const response = new Response()
    const jwtManager = new JwtManager()

    let token = req.headers['x-access-token'] || req.headers['authorization']
    
    if (token && token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (!token) return response.setError(res, 401, 'Access denied. No token provided.')

    try {
        const decoded = jwtManager.decode(token)
        req.user = decoded
        next()
    } catch (error) {
        response.setError(res, 400, 'Token Invalid')
    }

}

export default authJwt