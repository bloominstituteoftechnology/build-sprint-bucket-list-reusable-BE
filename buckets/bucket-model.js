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
  return db('buckets')
}

function findBy(filter){
  return db('buckets').where(filter);
}

function add(bucket) {
  return db('buckets')
    .insert(bucket)
}

function findById(id) {
  return db('buckets')
    .where({id})
    .first();
}

function remove(id){
  return db('buckets')
    .where({id})
    .del();
}

function update(bucket, id){
  return db('buckets')
    .where({id})
    .update(bucket);
}