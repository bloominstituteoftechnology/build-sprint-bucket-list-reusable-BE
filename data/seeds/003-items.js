
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items')
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {item_name: "Tokyo, Japan", journal_entry:"Best city in the world!", photo: "https://images.unsplash.com/photo-1547448526-5e9d57fa28f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", completed: true, bucket_id: 1},
        {item_name: "Deer Valley Seafood Buffet", completed: false, bucket_id: 2},
        {item_name: "Harry Potter Series", journal_entry: "My favorites!", photo: "https://images.unsplash.com/photo-1500697017927-23abd276362a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", completed: true, bucket_id: 3}
      ]);
    });
};
