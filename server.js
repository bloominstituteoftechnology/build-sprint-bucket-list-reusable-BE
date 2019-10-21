const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const Users = require('./users/users-model');
const Protected = require('./middleware/protected');
const jwt = require('jsonwebtoken');
const secrets = require('./config/secrets');

const server = express();


server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req, res) =>{
  res.send("We're connected!")
});

server.post('/api/register', (req, res) =>{
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10)
  user.password = hash;
  Users.add(user)
    .then(user =>{
      res.status(200).json(user)
    })
    .catch(err =>{
      res.status(500).json({message: "Could not add user"})
    })
})

server.post('/api/login', (req, res) =>{
  let {username, password} = req.body;
    Users.findBy({username})
      .first()
      .then(user =>{
        console.log('User info',user);
        if (user && bcrypt.compareSync(password, user.password)){
          const token = generateToken(user);
          console.log('token', token);
          res.status(200).json({message: `${user.username} is logged in!`,token,})
        } else {
          res.status(400).json({message: "Invalid username or password"})
        }
      })
      .catch(err =>{
        res.status(500).json(err)
      })
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

function generateToken(user){
  const payload ={
    username: user.username,
    subject: user.id,
    department: user.department
  };
  const options ={
    expiresIn: "8h"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = server;