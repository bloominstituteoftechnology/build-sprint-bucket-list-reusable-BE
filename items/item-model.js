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
  return db('items')
}

function findBy(bucket_id){
  return db('items');
}

function add(item) {
  return db('items')
    .insert(item)
}

function findById(id) {
  return db('items')
    .where({id})
    .first();
}

function remove(id){
  return db('items')
    .where({id})
    .del();
}

function update(item, id){
  return db('items')
    .where({id})
    .update(item);
}