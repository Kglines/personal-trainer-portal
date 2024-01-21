'use strict';
const {Client} = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; 
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Client.bulkCreate([
      {
        userId: 4,
        firstName: 'Lori',
        lastName: 'Alzimora',
        isActive: true,
      },
      {
        userId: 4,
        firstName: 'Pat',
        lastName: 'Thrasher',
        isActive: true,
      },
      {
        userId: 3,
        firstName: 'Betty',
        lastName: 'Ingram',
        isActive: true,
      },
      {
        userId: 3,
        firstName: 'Sophie',
        lastName: 'Hershey',
        isActive: true,
      },
      {
        userId: 3,
        firstName: 'Judy',
        lastName: 'Katz',
        isActive: true,
      },
      {
        userId: 3,
        firstName: 'Bruce',
        lastName: 'Fay',
        isActive: true,
      },
      {
        userId: 4,
        firstName: 'Alex',
        lastName: 'Gammidol',
        isActive: false
      },
      {
        userId: 3,
        firstName: 'Richard',
        lastName: 'Powers',
        isActive: false,
      }
    ], {validate: true});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Clients';
    await queryInterface.bulkDelete(options, null, options);
  }
};
