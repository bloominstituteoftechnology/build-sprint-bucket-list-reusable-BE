
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user-buckets').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user-buckets').insert([
        {bucket_id: 1, user_id: 2},
        {bucket_id: 2, user_id: 2},
        {bucket_id: 3, user_id: 1}
      ]);
    });
};
