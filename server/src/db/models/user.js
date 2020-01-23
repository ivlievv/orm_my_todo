'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: Sequelize.STRING(64),
      is: /[A-Z][a-z]*/,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING(64),
      is: /[A-Z][a-z]*/,
      allowNull:false
    },
    login: {
      type: Sequelize.STRING(16),
      is: /^[^ ^()*&?|\\/]{6,16}$/,
      allowNull: false,
      unique: true
    },
    passwordHash: {
      type: Sequelize.STRING,
      allowNull:false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      isEmail:true,
      allowNull:true
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};