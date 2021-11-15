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
    const data = req.body;
    if (!data) {
      res.send({status: 0});
    } else {
      if (!data.username || !data.password) {
        res.send({status: 0});
      } else {
        const users = await User.findAll({
          attributes: ['username'],
        });
        for (let i = 0; i < users.length; i++) {
          if (users[i].username == data.username) {
            res.send({ status: 0 });
            return;
          }
        }
        const newUser = await User.create({
          username: data.username,
          password: data.password,
        });
        const inventory = await Inventory.create();
        const landLine = await LandLine.findOne({
          where: { landLine: "default" },
        });
        const land = await Land.create({
          amountPlot: 6,
          image: "landDefault.png",
        });
        await newUser.setInventory(inventory);
        await landLine.addLand(land);
        await inventory.addLand(land);
        res.send({ status: 1 });
      }
    }
  }

  async login(req, res) {
    const data = req.body;
    if (!data) {
      res.send({status: 0});
    } else {
      if (!data.username || !data.password) {
        res.send({status: 0});
      } else {
        try {
          const users = await User.findAll();
          for (let i = 0; i < users.length; i++) {
            if (
              users[i].username == data.username &&
              users[i].password == data.password
            ) {
              await User.update({ status: 1 },{
                where: {
                  username: data.username,
                },
              });
              // console.log(await (await FarmController.index(users[i])).inventory.lands[0].landId);
              res.send({
                status: 1,
                body: await FarmController.index(users[i]),
              });
              return;
            }
          }
          res.send({ status: 0 });
        } catch(err) {
          res.send({ status: 0 });
        }
      }
    }
  }

  async logout(req, res) {
    const data = req.body;
    if (!data) {
      res.send({ status: 0 });
    } else {
      try {
        const users = await User.findAll({
          attributes: ['username'],
        });
        for (let i = 0; i < users.length; i++) {
          if (users[i].username == data.username) {
            await User.update({ status: 0 }, {where: {
              username : data.username
            }})
            res.send({ status: 1 });
            return;
          }
        }
        res.send({ status: 0 });
      } catch(err) {
        res.send({ status: 0 });
      }
    }
  }
}

module.exports = new SiteController;