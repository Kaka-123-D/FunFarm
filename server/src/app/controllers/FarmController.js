const process = require('process');
const User = require('../models/users/User');
const PlantLine = require('../models/plants/PlantLine');
const Plant = require('../models/plants/Plant');
const LandLine = require('../models/lands/LandLine');
const Land = require('../models/lands/Land');
const Tool = require('../models/tools/Tool');
const Inventory = require('../models/inventories/Inventory');
const Farming = require('../models/farming/Farming');
const db = require('../../config/db/index');

class FarmController {
  async index(req, res) {
    db.connect();
    const user = await User.findOne({where: {username: req.query.username}});
    const farmings = await user.getFarmings();
    if (farmings.length > 0) {
      for (let i = 0; i< farmings.length; i++) {
        res.send({plant: await farmings[i].getPlant(), 
                  land: await farmings[i].getLand(),
                  tools: await farmings[i].getTools()
                });
      }
      return;
    }
    res.send({error: 'Không có cây nào đang trồng'});
  }

  async growPlant(req, res) {
    db.connect();
    const user = await User.findOne({where: {username: req.query.username}});
    const inventory = await user.getInventory();
    const plants = await inventory.getPlants({where: {plantId: req.query.plantId}});
    const lands = await inventory.getLands({where: {landId: req.query.landId}});
    const tools = await inventory.getTools({where: {toolId: req.query.toolId}});
    await Plant.update({ inventoryId: null }, {
      where: {
        plantId: req.query.plantId
      }
    });
    await Land.update({ inventoryId: null }, {
      where: {
        landId: req.query.landId
      }
    });
    await Tool.update({ inventoryId: null }, {
      where: {
        toolId: req.query.toolId
      }
    });
    const farming = await Farming.create({ amountLECreate: plants[0].amountLEGenerated });
    await farming.setPlant(plants[0]);
    await farming.setLand(lands[0]);
    await farming.addTool(tools[0]);
    await user.addFarming(farming);
    res.send({farming: farming});
  }

  async test(req, res) {
    // db.connect();

    // await Inventory.sync();
    // const user = await User.findOne({where: {username: 'nq0118'}});
    // const inventory = await Inventory.create({});
    // await user.setInventory(inventory);
    // console.log('add inventory success!');

    // await Farming.sync();
    // const farming = await Farming.create({amountLECreate: 1});
    // await user.addFarming(farming);
    // console.log('add farming success!');

    // await Plant.sync();
    // const plantLines = await PlantLine.findOne({where: {plantLine: 'lửa'}});
    // const plant = await Plant.create({amountLEGenerated: 980,timeToGrow: '48:00:00', image: 'rare-plant.png'});
    // await plantLines.addPlant(plant);
    // await inventory.addPlant(plant);
    // await farming.setPlant(plant);
    // console.log('add plant to inventory success!');

    // await Tool.sync();
    // const tool = await Tool.create({toolName: 'Small Pot', 
    //             textDescription: 'You need small pot to start farming.', 
    //             priceSell: 50,
    //             useTime: '240:00:00',
    //             useNumber: 1,
    //             image: 'small-pot.png'
    //           });
    // await inventory.addTool(tool);
    // await farming.addTool(tool);
    // console.log('add tool to inventory success!');

    // await Land.sync();
    // const landLines = await LandLine.findOne({where: {landLine: 'default'}});
    // const land = await Land.create({amountPlot: 6, image: 'default-land.png'});
    // await landLines.addLand(land);
    // await inventory.addLand(land);
    // await farming.setLand(land);
    // console.log('add land to inventory success!');
    
    // console.log('Success!');
  }
}

module.exports = new FarmController;