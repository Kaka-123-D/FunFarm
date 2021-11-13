"use strict";

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize("fun_farms", "root", "5201314D.k", {
  host: "localhost",
  dialect: "mysql",
});

class User extends Model {
  getUsername() {
    return this.username;
  }
  setUsername(username) {
    if (username != '' && username.length > 6) {
      this.username = username;
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
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false, 
    defaultValue: false
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users'
});

module.exports = User;