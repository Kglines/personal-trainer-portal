'use strict';

const { Announcement } = require('../models');
const options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Announcement.bulkCreate([
      {
        userId: 2,
        date: '2023-11-01',
        body: 'This is an announcement for the 1st of November.'
      },
      {
        userId: 2,
        date: '2023-11-02',
        body: 'This is an announcement for the 2nd of November.'
      },
      {
        userId: 2,
        date: '2023-11-03',
        body: 'This is an announcement for the 3rd of November.'
      },
      {
        userId: 2,
        date: '2023-11-05',
        body: 'This is an announcement for the 5th of November.'
      },
      {
        userId: 2,
        date: '2023-11-07',
        body: 'This is an announcement for the 7th of November.'
      },
      {
        userId: 2,
        date: '2023-11-08',
        body: 'This is an announcement for the 8th of November.'
      },
      {
        userId: 2,
        date: '2023-11-08',
        body: 'This is an announcement for the 8th of November.'
      },
      {
        userId: 2,
        date: '2023-11-10',
        body: 'This is an announcement for the 10th of November.'
      },
      {
        userId: 2,
        date: '2023-10-20',
        body: "This is an announcement for the 20th of October. Let's see how this looks with a longer body."
      },
      {
        userId: 2,
        date: '2023-10-15',
        body: 'This is an announcement for the 15th of October.'
      },
    ],
      { validate: true })
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Announcements';
    await queryInterface.bulkDelete(options, null, options);
  }
};
