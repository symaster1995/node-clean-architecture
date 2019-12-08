require('dotenv').config({ path: 'development.env' })

module.exports = {
    'development': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_NAME,
        'host': process.env.DB_HOST,
        'dialect': process.env.DB_DRIVER,
        'port': process.env.DB_POST
    },
    'test': {
        'username': 'root',
        'password': null,
        'database': 'database_test',
        'host': '127.0.0.1',
        'dialect': 'mysql',
        'operatorsAliases': false
    },
    'production': {
        'username': 'root',
        'password': null,
        'database': 'database_test',
        'host': '127.0.0.1',
        'dialect': 'mysql',
        'operatorsAliases': false
    }
}