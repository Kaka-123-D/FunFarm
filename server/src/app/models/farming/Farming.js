"use strict";

const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('../users/User');
const Land = require('../lands/Land');
const Tool = require('../tools/Tool');
const Plant = require('../plants/Plant');
const sequelize = new Sequelize('fun_farms', 'root', '#Qm4808590', {
  host: 'localhost',
  dialect: 'mysql'
});

class Farming extends Model {
  
}

Farming.init({
  farmingId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  amountLECreate: {
    type: DataTypes.INTEGER,
    allowNull: false, 
    defaultValue: 0
  }
}, {
  sequelize,
  modelName: 'Farming',
  tableName: 'farmings'
});

User.hasMany(Farming, {
  foreignKey: 'userId'
});
Farming.belongsTo(User, {
  foreignKey: 'userId'
});

Farming.hasOne(Land, {
  foreignKey: 'farmingId'
});
Land.belongsTo(Farming, {
  foreignKey: 'farmingId'
});

Farming.hasOne(Plant, {
  foreignKey: 'farmingId'
});
Plant.belongsTo(Farming, {
  foreignKey: 'farmingId'
});

Farming.hasMany(Tool, {
  foreignKey: 'farmingId'
});
Tool.belongsTo(Farming, {
  foreignKey: 'farmingId'
});


module.exports = Farming;