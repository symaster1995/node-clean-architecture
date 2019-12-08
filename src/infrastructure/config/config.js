require('dotenv').config({ path: 'development.env' })

const config = {
    'environment': 'development',
    'port': process.env.PORT,
    'app': process.env.APP,
    'jwtSecret': process.env.JWT_SECRET_KEY,
    'jwtExpiration': process.env.JWT_EXPIRATION,
    'apiVersion': process.env.API_VERSION
}

export default config