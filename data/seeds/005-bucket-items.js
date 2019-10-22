
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bucket-items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('bucket-items').insert([
        {item_id: 1, bucket_id: 1},
        {item_id: 2, bucket_id: 2},
        {item_id: 3, bucket_id: 3}
      ]);
    });
};
