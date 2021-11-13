"use strict";

const { Sequelize, DataTypes, Model } = require('sequelize');
const LandLine = require('./LandLine');
const sequelize = new Sequelize('fun_farms', 'root', '#Qm4808590', {
  host: 'localhost',
  dialect: 'mysql'
});

class Land extends Model {
  
}

Land.init({
  landId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }, 
  amountPlot: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Land',
  tableName: 'lands'
});

LandLine.hasMany(Land, {
  foreignKey: {
    name: 'landLineId'
  }
});
Land.belongsTo(LandLine, {
  foreignKey: {
    name: 'landLineId'
  }
});

module.exports = Land;