const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

function restricted(req, res, next){
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) =>{
      if (err) {
        res.status(401).json({message: "Nope, you can't go there"})
      } else {
        req.user = {username: decodedToken.username, department: decodedToken.department},
        next();
      }
    })
  } else {
    res.status(401).json({message: "Token is invalid"})
  }
};

module.exports = restricted;