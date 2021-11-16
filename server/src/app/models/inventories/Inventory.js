"use strict";

const { Sequelize, DataTypes, Model } = require('sequelize');
const User = require('../users/User');
const Land = require('../lands/Land');
const Tool = require('../tools/Tool');
const Plant = require('../plants/Plant');
const sequelize = new Sequelize('fun_farms', 'root', null, {
  host: 'localhost',
  dialect: 'mysql'
});

class Inventory extends Model {
  
}

Inventory.init({
  inventoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  amountLe: {
    type: DataTypes.DECIMAL(20, 5),
    allowNull: false,
    defaultValue: 1000.00000
  }
}, {
  sequelize,
  modelName: 'Inventory',
  tableName: 'inventories'
});

User.hasOne(Inventory, {
  foreignKey: 'userId'
});
Inventory.belongsTo(User, {
  foreignKey: 'userId'
});

Inventory.hasMany(Land, {
  foreignKey: 'inventoryId'
});
Land.belongsTo(Inventory, {
  foreignKey: 'inventoryId'
});

Inventory.hasMany(Plant, {
  foreignKey: 'inventoryId'
});
Land.belongsTo(Inventory, {
  foreignKey: 'inventoryId'
});

Inventory.hasMany(Tool, {
  foreignKey: 'inventoryId'
});
Tool.belongsTo(Inventory, {
  foreignKey: 'inventoryId'
});

module.exports = Inventory;