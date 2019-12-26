'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // hashed to 'password'
        const hashedPassword = '$argon2i$v=19$m=4096,t=3,p=1$ab6TObJG47qyqOa1zxvo/A$FvljEvKx+ULA8dUSGz4UXPNiqEgsSo76KMuz8tW+UJM'

        await queryInterface.bulkInsert('Users', [{
            firstName: 'joe',
            lastName: 'mama',
            email: 'joe.mama@test.com',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {})


        const user = await queryInterface.sequelize.query(`SELECT id from Users order by id desc limit 1;`)
        const userRow = user[0]

        return await queryInterface.bulkInsert('User_Auths', [{
            user_id: userRow[0].id,
            password: hashedPassword,
            alg: 'argon2',
            createdAt: new Date(),
            updatedAt: new Date()

        }])

    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.bulkDelete('User_Auths', null, {})
        return await queryInterface.bulkDelete('Users', null, {})
    }
};