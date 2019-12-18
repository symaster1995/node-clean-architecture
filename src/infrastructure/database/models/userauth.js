'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAuth = sequelize.define('UserAuth', {
    user_id: DataTypes.INTEGER,
    password: DataTypes.STRING,
    alg: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {});
  UserAuth.associate = function(models) {
    // associations can be defined here
  };
  return UserAuth;
};