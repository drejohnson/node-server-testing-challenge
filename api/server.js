const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const UsersRoutes = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', UsersRoutes);

server.get('/', (req, res) => {
  res.send({ api: 'Node Server Testing' });
});

module.exports = server;
