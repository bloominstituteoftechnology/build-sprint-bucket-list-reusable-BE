const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const Users = require('./users/users-model');
const Protected = require('./middleware/protected');
const jwt = require('jsonwebtoken');
const secrets = require('./config/secrets');

const LoginRouter = require('./routers/login-router');
const RegisterRouter = require('./routers/register-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/register', RegisterRouter);
server.use('/api/login', LoginRouter);

server.get('/', (req, res) =>{
  res.send("We're connected!")
});

server.get('/api/users', Protected, (req, res) =>{
  Users.find()
  .then(user =>{
    res.json({loggedInUser: req.username, user})
  })
  .catch(err =>{
    res.json(err)
  })
});



module.exports = server;