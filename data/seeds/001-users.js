const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'dummy1', password: bcrypt.hashSync('dummy1'), email: 'dummy1@mail.com'},
        {username: 'dummy2', password: bcrypt.hashSync('dummy2'), email: 'dummy2@mail.com'}
      ]);
    });
};