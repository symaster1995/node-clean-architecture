'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserAuth = sequelize.define('UserAuth', {
        UserId: {
            type: DataTypes.INTEGER,
            field: 'user_id'
        },
        password: DataTypes.STRING,
        alg: DataTypes.STRING,
        salt: DataTypes.STRING
    },{})

    UserAuth.associate = function(models) {
        UserAuth.belongsTo(models.User, {
            foreignKey: 'id',
            targetKey: 'id'
        })
    }
    return UserAuth
};