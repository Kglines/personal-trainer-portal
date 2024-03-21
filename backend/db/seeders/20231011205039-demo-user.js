'use strict';

/** @type {import('sequelize-cli').Migration} */

const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Users';
    await queryInterface.bulkInsert(options, [
      {
        username: 'Demo-lition',
        firstName: 'Demo',
        lastName: 'User',
        email: 'demo@demo.io',
        emailVerified: true,
        password: bcrypt.hashSync('password'),
        profileImg:
          'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80',
        role: 'trainer'
      },
      {
        username: 'Maria',
        firstName: 'Maria',
        lastName: 'Crennan',
        email: 'maria@hachealthclub.com',
        emailVerified: true,
        password: bcrypt.hashSync('password'),
        profileImg:
          'https://d2x1db8y31vprb.cloudfront.net/fitness-companies/10/logo-big.jpg',
        role: 'admin'
      },
      {
        username: 'Boots',
        firstName: 'Keith',
        lastName: 'Glines',
        email: 'keithglines@yahoo.com',
        emailVerified: true,
        password: bcrypt.hashSync('password'),
        profileImg:
          'https://media.licdn.com/dms/image/D4E03AQEaKH6r4-SulQ/profile-displayphoto-shrink_800_800/0/1680635993842?e=2147483647&v=beta&t=i-XptlWFKDlyyre9NPyBF-E28Fma-T43s9OdI2xtZSM',
        role: 'admin',
      },
      {
        username: 'Dewey',
        firstName: 'Dewey',
        lastName: 'Lightcap',
        email: 'deweylightcap@gmail.com',
        emailVerified: true,
        password: bcrypt.hashSync('password'),
        profileImg:
          'https://i0.wp.com/hachealthclub.blog/wp-content/uploads/2020/02/DSC_5243_edit.jpg?fit=1200%2C800&ssl=1',
        role: 'trainer',
      },
      {
        username: 'Mechanic',
        firstName: 'Mister',
        lastName: 'Mechanic',
        email: 'mechanic@fix.com',
        emailVerified: true,
        password: bcrypt.hashSync('password'),
        profileImg:
          'https://plus.unsplash.com/premium_photo-1677009835876-4a29ddc4cc2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80',
        role: 'mechanic'
      },
    ], { validate: true });
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'Maria', 'Boots', 'Dewey', 'Mechanic']}
    }, {})
  }
};
