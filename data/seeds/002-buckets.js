
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('buckets')
    .then(function () {
      // Inserts seed entries
      return knex('buckets').insert([
        {title: "Places to visit", created_by: "jenn1", user_id: 1},
        {title: "Restaurants", created_by: "jenn1", user_id: 1},
        {title: "Books to read", created_by: "test2", user_id: 2}
      ]);
    });
};
