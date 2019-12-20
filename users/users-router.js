const express = require('express');
const Users = require('./users-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await Users.findUser();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ errorMessage: 'Could not find user' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    !user
      ? res.status(404).json({ message: 'user not found' })
      : res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
