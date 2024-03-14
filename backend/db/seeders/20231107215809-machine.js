'use strict';
const { Machine } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; // define your schema in options object
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await Machine.bulkCreate([
        {
          number: 1,
          manufacturer: 'Precor',
          type: 'Cardio',
          name: 'TRM 885',
          description: 'Treadmill',
          machine_img:
            'https://www.precor.com/sites/www.precor.com/files/asset-images/product/TRM885_2017.png',
          dateNew: '2023-11-01',
          mileage: 25,
          hours: 5,
        },
        {
          number: 2,
          manufacturer: 'Precor',
          type: 'Cardio',
          name: 'TRM 885',
          description: 'Treadmill',
          machine_img:
            'https://www.precor.com/sites/www.precor.com/files/asset-images/product/TRM885_2017.png',
          dateNew: '2023-11-01',
          mileage: 20,
          hours: 3,
        },
        {
          number: 3,
          manufacturer: 'Precor',
          type: 'Cardio',
          name: 'TRM 885',
          description: 'Treadmill',
          machine_img:
            'https://www.precor.com/sites/www.precor.com/files/asset-images/product/TRM885_2017.png',
          dateNew: '2023-11-01',
          mileage: 12,
          hours: 3,
        },
        {
          number: 4,
          manufacturer: 'Precor',
          type: 'Cardio',
          name: 'EFX 885',
          description: 'Elliptical',
          machine_img:
            'https://www.precor.com/sites/www.precor.com/files/asset-images/product/EFX885_2017.png',
          dateNew: '2023-11-01',
          mileage: 0,
          hours: 0,
        },
        {
          number: 151,
          manufacturer: 'Hammer Strength',
          type: 'Strength',
          name: 'Iso-Lateral Bench Press',
          description: 'Plate Loaded Bench Press',
          machine_img:
            'https://www.lifefitness.com.au/wp-content/uploads/2018/12/PLBP.png',
          dateNew: '2023-11-01',
        },
        {
          number: 175,
          manufacturer: 'Life Fitness',
          type: 'Strength',
          name: 'Shoulder Press',
          description: 'Selectorized Shoulder Press',
          machine_img:
            'https://shop.lifefitness.com/cdn/shop/products/outlet-optima-shoulder-press-platinum-black-1000x1000.jpg?v=1679600159&width=1000',
        },
      ],
      { validate: true })
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Machines';
    await queryInterface.bulkDelete(options, null, options);
  }
};
