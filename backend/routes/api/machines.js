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
router.get('/:machineId', async (req, res) => {
  const { machineId } = req.params;
  const machine = await Machine.findOne({
    where: {
      number: machineId 
    }
  });
  // console.log('************* MACHINE *************', machine, machineId)
  return res.json(machine);
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
