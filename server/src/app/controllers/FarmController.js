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
  async index(user) {
    var farming_data = [];
    try {
      const farmings = await user.getFarmings();
      const inventory = await user.getInventory();
      const plants = await inventory.getPlants();
      console.log(plants);
      const lands = await inventory.getLands();
      const tools = await inventory.getTools();
      
      for (let i = 0; i < farmings.length; i++) {
        farming_data.push({
          plant: await farmings[i].getPlant(),
          land: await farmings[i].getLand(),
          tools: await farmings[i].getTools(),
        });
      }
      return {inventory: {plants: plants, lands: lands, tools: tools}, farming: farming_data};
    } catch(err) {
      return {};
    }
  }

  async growPlant(req, res) {
    const data = req.body;
    if (!data) {
      res.send({ status: 0 });
    } else {
      try {
        const user = await User.findOne({
          where: { username: data.username },
        });
        const inventory = await user.getInventory();
        const plants = await inventory.getPlants({
          where: {
            plantId: data.plantName,
            inventoryId: inventory.inventoryId,
          },
        });
        const lands = await inventory.getLands({
          where: { landId: data.landId },
        });
        if (lands[0].amountPlot == 0) {
          res.send({ status: 0 });
          return;
        } else {
          const farming = await Farming.create({
            amountLECreate: plants[0].amountLEGenerated,
          });
          await farming.setPlant(plants[0]);
          await farming.setLand(lands[0]);
          await user.addFarming(farming);
          await Plant.update(
            { inventoryId: null },
            {
              where: {
                plantId: plants[0].plantId,
              },
            }
          );
          await Land.update(
            { amountPlot: lands[0].amountPlot - 1, inventoryId: null },
            {
              where: {
                landId: lands[0].landId,
              },
            }
          );
          res.send({ status: 1, data: { plant: plants[0], land: lands[0] } });
        }
      } catch(err) {
        res.send({ status: 0 });
      }
    }
  }

  async addPot(req, res) {
    const user = await User.findOne({
      where: { username: req.body.username },
    });
    const farming = await user.getFarmings({where: {farmingId: req.body.farmingId}});
    const inventory = await user.getInventory();
    const pots = await inventory.getTools({
      where: {
        toolName: req.body.toolName,
        inventoryId: inventory.inventoryId,
      },
    });
    await farming[0].addTool(pots[0]);
    await Tool.update(
      { inventoryId: null },
      {
        where: {
          toolId: pots[0].toolId,
        },
      }
    );
    res.send({status: 1});
  }

  async watering(req, res) {
    const user = await User.findOne({
      where: { username: req.body.username },
    });
    const farming = await user.getFarmings({where: {farmingId: req.body.farmingId}});
    const inventory = await user.getInventory();
    const waters = await inventory.getTools({
      where: {
        toolName: req.body.toolName,
        inventoryId: inventory.inventoryId,
      },
    });
    await farming[0].addTool(waters[0]);
    await Tool.update(
      { useNumber: waters[0].useNumber - 1 },
      {
        where: {
          toolId: waters[0].toolId,
        },
      }
    );
    res.send({ status: 1 });
  }

  async buyPlant(req, res) {
    const data = req.body;
    if (!data) {
      res.send({ status: 0 });
    } else {
      try {
        const user = await User.findOne({
          where: { username: data.username },
        });
        const inventory = await user.getInventory();
        for (let i = 0; i < data.amount; i++) {
          let plant = {};
          if (data.plantType == 1) {
            const plantLine = await PlantLine.findOne({
              where: { plantLine: "mama" },
            });
            plant = await Plant.create({
              amountLEGenerated: 850,
              timeToGrow: "144:00:00",
              image: "mother-tree.png",
              plantName: "Sunflower mama",
            });
            await plantLine.addPlant(plant);
          } else if(data.plantType == 0) {
            const plantLine = await PlantLine.findOne({
              where: { plantLine: "Sapling" },
            });
            plant = await Plant.create({
              amountLEGenerated: 250,
              timeToGrow: "72:00:00",
              image: "child-tree.png",
              plantName: "Sunflower Sapling",
            });
            await plantLine.addPlant(plant);
          }
          await inventory.addPlant(plant);
        }
        res.send({ status: 1 });
      } catch(err) {
        res.send({ status: 0 });
      }
    }
  }

  async buyTool(req, res) {
    const data = req.body;
    if (!data) {
      res.send({ status: 0 });
    } else {
      try {
        const user = await User.findOne({
          where: { username: data.username },
        });
        const inventory = await user.getInventory();
        for (let i = 0; i < data.amount; i++) {
          let tool = {};
          if (data.toolType == 1) {
            tool = await Tool.create({
              toolName: "Small Pot",
              textDescription: "You need small pot to start farming.",
              priceSell: 50,
              useTime: "240:00:00",
              useNumber: 1,
              image: "smallPot.png",
            });
          } else if (data.toolType == 2) {
            tool = await Tool.create({
              toolName: "Big Pot",
              textDescription:
                "You need big pot to start farming. +1% chance to drop seeds.",
              priceSell: 100,
              useTime: "720:00:00",
              useNumber: 1,
              image: "bigPot.png",
            });
          } else if (data.toolType == 3) {
            tool = await Tool.create({
              toolName: "Water",
              textDescription: "Don't forget to water your plants everyday.",
              priceSell: 50,
              useTime: "00:00:00",
              useNumber: 100,
              image: "water.png",
            });
          } else if (data.toolType == 4) {
            tool = await Tool.create({
              toolName: "Scarecrow",
              textDescription: "Crows are unpredictable.",
              priceSell: 20,
              useTime: "00:00:00",
              useNumber: 20,
              image: "scarecrow.png",
            });
          } else if (data.toolType == 5) {
            tool = await Tool.create({
              toolName: "Greenhouse",
              textDescription: "No need to worry about tomorrow's weather.",
              priceSell: 10,
              useTime: "00:00:00",
              useNumber: 10,
              image: "greenhouse.png",
            });
          }
          await inventory.addTool(tool);
        }
        res.send({ status: 1 });
      } catch(err) {
        res.send({ status: 0 });
      }
    }
  }

  async test(req, res) {
    await PlantLine.create({
      plantLine: "Sapling",
      textDescription:
        "A temporary plant that gives 250LE/72h, is not affected by weather events, and cannot drop seeds.",
    });
    await PlantLine.create({
      plantLine: "mama",
      textDescription:
        "A temporary mother tree that gives 850LE/144h, is not affected by weather events, and cannot drop seeds.",
    });
    await LandLine.create({
      landLine: "default",
      textDescription: "màu xám"
    });

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