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
          users[i].status = true;
          res.send({status: 1});
          return;
        }
    }
    res.send({status: 0});
  }

  async logout(req, res) {
    db.connect();
    const users = await User.findAll({attributes: ['username', 'password']});
    const currentUser = req.body;
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == currentUser.username) {
          users[i].status = false;
          res.send({status: 1});
          return;
        }
    }
    res.send({status: 0});
  }

  async test(req, res) {
    db.connect();
    await User.create({username: 'vtk123', password: 'khai123'});
    res.send('success!');
  }
}

module.exports = new SiteController;