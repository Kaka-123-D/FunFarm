const process = require('process');
const User = require('../models/User');
const db = require('../../config/db/index');

class SiteController {
  index(req, res) {
    res.sendFile(path.join(process.cwd(), 'build', 'index.html'));
    
  }

  async register(req, res) {
    db.connect();
    await User.sync();
    console.log("The table for the User model was just (re)created!");
    const jane = await User.create({userName: req.body.username, passWord: req.body.password});
    console.log('Insert data success!');
    // const users = await User.findAll();
    // console.log(users.every(user => user instanceof User)); // true
    // console.log("All users:", JSON.stringify(users, null, 2));
  }
}

module.exports = new SiteController;