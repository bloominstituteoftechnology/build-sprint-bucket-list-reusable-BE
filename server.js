const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const UsersRouter = require('./users/users-router');
const BucketRouter = require('./buckets/bucket-router');
const ItemRouter = require('./items/item-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', UsersRouter);
server.use('/api/buckets', BucketRouter);
server.use('/api/items', ItemRouter);


server.get('/', (req, res) =>{
  res.status(200).json({message: "We're connected!"})
});




module.exports = server;