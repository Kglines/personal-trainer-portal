const express = require('express');
const router = express.Router();
const { Machine } = require('../../db/models');

// ********************* Get Machines *********************
router.get('/', async (req, res) => {
  const machines = await Machine.findAll();
  // console.log('MACHINES === ', machines)
  return res.json(machines);
});

// ********************* Get Machine *********************
router.get('/:id', async (req, res) => {
  const machine = await Machine.findByPk(req.params.id);
  res.json(machine);
});

// ********************* Create Machine *********************
router.post('/', async (req, res) => {
  const machine = await Machine.create(req.body);
  res.json(machine);
});

// ********************* Update Machine *********************
router.put('/:id', async (req, res) => {
  const machine = await Machine.findByPk(req.params.id);
  await machine.update(req.body);
  res.json(machine);
});

// ********************* Delete Machine *********************
router.delete('/:id', async (req, res) => {
  const machine = await Machine.findByPk(req.params.id);
  await machine.destroy();
  res.json({ message: 'Deleted Machine' });
});

module.exports = router;
