'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING
    }, {})

    User.associate = function(models) {
        User.hasOne(models.UserAuth, {
            foreignkey: 'user_id',
            sourceKey: 'id',
            targetKey: 'user_id'
        })
    }

    return User
};