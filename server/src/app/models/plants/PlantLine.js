"use strict";

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('fun_farms', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

class PlantLine extends Model {
  
}

PlantLine.init({
  plantLineId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  plantLine: {
    type: DataTypes.TEXT,
    allowNull: false
  }, 
  textDescription: {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  modelName: 'PlantLine',
  tableName: 'plantlines'
});

module.exports = PlantLine;