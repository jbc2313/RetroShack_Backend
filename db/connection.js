const { Sequelize } = require('sequelize');

//freezeTableName makes the model and table the same name.

const sequelize = new Sequelize('postgres://cdbkysjx:hv4Dfbk_KL3DOumrKB-eA7MLm-bygdoW@jelani.db.elephantsql.com/cdbkysjx', {
  define: {
    freezeTableName: true
  }
});

module.exports = sequelize;