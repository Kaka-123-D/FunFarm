const process = require('process');
const User = require('../models/users/User');
const PlantLine = require('../models/plants/PlantLine');
const Plant = require('../models/plants/Plant');
const LandLine = require('../models/lands/LandLine');
const Land = require('../models/lands/Land');
const Tool = require('../models/tools/Tool');
const Inventory = require('../models/inventories/Inventory')
const db = require('../../config/db/index');

class SiteController {
  index(req, res) {
    res.sendFile(path.join(process.cwd(), 'build', 'index.html'));
  }

  async register(req, res) {
    db.connect();
    const users = await User.findAll({attributes: ['username', 'password']});
    const currentUser = req.body;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == currentUser.username) {
          res.send({status: 0});
          return;
        }
    }
    await User.sync();
    const jane = await User.create({username: req.body.username, password: req.body.password});
    res.send({status: 1});
  }

  async login(req, res) {
    db.connect();
    const users = await User.findAll({attributes: ['username', 'password']});
    const currentUser = req.body;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == currentUser.username && 
        user[i].password == currentUser.password) {
          res.send({status: 1});
          return;
        }
    }
    res.send({status: 0});
  }

  async test(req, res) {
    db.connect();

    // await Inventory.sync();
    // const user = await User.findOne({where: {username: 'nq0118'}});
    // const inventory = await Inventory.create({});
    // await user.setInventory(inventory);
    // console.log('add inventory success!');

    // await Plant.sync();
    // const plantLines = await PlantLine.findOne({where: {plantLine: 'lửa'}});
    // const plant = await Plant.create({amountLEGenerated: 980,timeToGrow: '48:00:00', image: 'rare-plant.png'});
    // await plantLines.addPlant(plant);
    // await inventory.addPlant(plant);
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
    // console.log('add tool to inventory success!');

    // await Land.sync();
    // const landLines = await LandLine.findOne({where: {landLine: 'default'}});
    // const land = await Land.create({amountPlot: 6, image: 'default-land.png'});
    // await landLines.addLand(land);
    // await inventory.addLand(land);
    // console.log('add land to inventory success!');

    const inventory = await Inventory.findOne({where: {inventoryId: 1}});
    console.log(await inventory.getPlants());
  }
}

module.exports = new SiteController;