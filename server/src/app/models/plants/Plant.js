"use strict";

const { Sequelize, DataTypes, Model } = require('sequelize');
const PlantLine = require('./PlantLine');
const sequelize = new Sequelize('fun_farms', 'root', '#Qm4808590', {
  host: 'localhost',
  dialect: 'mysql'
});

class Plant extends Model {
  
}

Plant.init({
  plantId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }, 
  amountLEGenerated: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  timeToGrow: {
    type: DataTypes.TIME,
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Plant',
  tableName: 'plants'
});

PlantLine.hasMany(Plant, {
  foreignKey: {
    name: 'plantLineId'
  }
});
Plant.belongsTo(PlantLine, {
  foreignKey: {
    name: 'plantLineId'
  }
});

module.exports = Plant;