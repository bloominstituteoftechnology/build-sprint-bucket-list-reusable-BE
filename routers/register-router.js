const express = require('express');
const Users = require('../users/users-model');
const router = express.Router();

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

module.exports = router;