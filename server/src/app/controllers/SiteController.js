const path = require('path');
const process = require('process');
const Inventory = require('../models/inventories/Inventory');
const Land = require('../models/lands/Land');
const User = require('../models/users/User');
const LandLine = require('../models/lands/LandLine');
const FarmController = require('./FarmController');

class SiteController {
  index(req, res) {
    res.sendFile(path.join(process.cwd(), 'src/build', 'index.html'));
  }

  async register(req, res) {
    const users = await User.findAll();
    const currentUser = req.body;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == currentUser.username) {
          res.send({status: 0});
          return;
        }
    }
    const newUser = await User.create({username: req.body.username, password: req.body.password});
    const inventory = await Inventory.create();
    const landLine = await LandLine.findOne({
      where: { landLine: "default" },
    });
    const land = await Land.create({ amountPlot: 6, image: 'landDefault.png'});
    await newUser.setInventory(inventory);
    await landLine.addLand(land);
    await inventory.addLand(land);
    res.send({status: 1});
  }

  async login(req, res) {
    const users = await User.findAll();
    if (users.length == 0) {
      res.send({ status: 0 });
    } else {
      const currentUser = req.body;
      for (let i = 0; i < users.length; i++) {
      if (users[i].username == currentUser.username && 
        users[i].password == currentUser.password) {
          await User.update({ status: 1 }, {where: {
            username : currentUser.username
          }})
          res.send({ status: 1, data: await FarmController.index(users[i])});
          return;
        }
      }
      res.send({ status: 0 });
    }
  }

  async logout(req, res) {
    const users = await User.findAll({ attributes: ["username", "password"] });
    if (users.length == 0) {
      res.send({ status: 0 });
    } else {
      const currentUser = req.body;
      for (let i = 0; i < users.length; i++) {
      if (users[i].username == currentUser.username) {
        await User.update({ status: 0 }, {where: {
          username : currentUser.username
        }})
        res.send({ status: 1 });
        return;
        }
      }
      res.send({ status: 0 });
    }
  }

  async test(req, res) {
    // db.connect();
    // await User.create({username: 'vtk123', password: 'khai123'});
    // res.send('success!');
    res.send('Lỗi');
  }
}

module.exports = new SiteController;