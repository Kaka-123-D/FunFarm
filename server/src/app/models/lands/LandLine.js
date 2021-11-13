"use strict";

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('fun_farms', 'root', '#Qm4808590', {
  host: 'localhost',
  dialect: 'mysql'
});

class LandLine extends Model {
  
}

LandLine.init({
  landLineId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  landLine: {
    type: DataTypes.TEXT,
    allowNull: false
  }, 
  textDescription: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'LandLine',
  tableName: 'landlines'
});

module.exports = LandLine;