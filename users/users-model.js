const db = require('../data/db-config');

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db('users')
}

function findBy(filter){
  return db('users').where(filter);
}

function add(user) {
  return db('users')
    .insert(user)
}

function findById(id) {
  return db('users')
    .where({id})
    .first();
}

function remove(id){
  return db('users')
    .where({id})
    .del();
}

function update(user, id){
  return db('users')
    .where({id})
    .update(user);
}