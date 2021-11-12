"use strict";

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('fun_farms', 'root', '5201314D.k', {
  host: 'localhost',
  dialect: 'mysql'
});

class User extends Model {
  getUserName() {
    return this.userName;
  }
  setUserName(userName) {
    if (userName != '' && userName.length > 6) {
      this.userName = userName;
    }
  }
}

User.init({
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }, 
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  passWord: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users'
});

module.exports = User;