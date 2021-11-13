"use strict";

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('fun_farms', 'root', '#Qm4808590', {
  host: 'localhost',
  dialect: 'mysql'
});

class Tool extends Model {
  
}

Tool.init({
  toolId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  toolName: {
    type: DataTypes.TEXT,
    allowNull: false
  }, 
  textDescription: {
    type: DataTypes.TEXT
  },
  priceSell: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  useTime: {
    type: DataTypes.TIME,
    allowNull: false
  },
  useNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Tool',
  tableName: 'Tools'
});

module.exports = Tool;