'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserPassword = sequelize.define('UserPassword', {
        userId: DataTypes.INTEGER,
        password: DataTypes.STRING,
        alg: DataTypes.STRING
    }, {});
    UserPassword.associate = function(models) {
        UserPassword.belongsTo(models.User, {
            foreignKey: 'id',
            targetKey: 'id'
        })
    };
    return UserPassword;
};