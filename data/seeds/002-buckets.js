
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('buckets').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('buckets').insert([
        {title: "Places to visit", created_by: "test2"},
        {title: "Restaurants", created_by: "test2"},
        {title: "Books to read", created_by: "test3"}
      ]);
    });
};
