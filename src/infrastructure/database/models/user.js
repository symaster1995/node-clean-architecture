'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    }, {})

    User.associate = function(models) {
        User.hasOne(models.UserPassword, {
            foreignkey: 'userId',
            sourceKey: 'id',
            targetKey: 'userId'
        })
    }

    return User
};