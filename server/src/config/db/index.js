const { Sequelize } = require('sequelize');

async function connect() {
  const sequelize = new Sequelize("fun_farms", "root", null, {
    host: "localhost",
    dialect: "mysql"
  });
  try {
    await sequelize.authenticate();
    console.log('Connect database success!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = { connect };
