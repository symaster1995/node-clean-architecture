'use strict';
module.exports = (sequelize, DataTypes) => {
    const User_Auth = sequelize.define('UserAuth', {
        user_id: DataTypes.INTEGER,
        password: DataTypes.STRING,
        alg: DataTypes.STRING,
        salt: DataTypes.STRING
    }, { underscored: true });
    User_Auth.associate = function(models) {
        User_Auth.belongsTo(models.User, {
            foreignKey: 'id',
            targetKey: 'id'
        })
    };
    return User_Auth;
};