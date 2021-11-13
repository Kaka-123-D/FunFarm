const { Sequelize } = require('sequelize');

async function connect() {
  const sequelize = new Sequelize('fun_farms', 'root', '5201314D.k', {
    host: 'localhost',
    dialect: 'mysql'
  });
  try {
    await sequelize.authenticate();
    console.log('Connect success!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = { connect };
