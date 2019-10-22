
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'jenn1', password: 'test1', email: 'test1@mail.com'},
        {username: 'test2', password: 'test2', email: 'test2@mail.com'}
      ]);
    });
};