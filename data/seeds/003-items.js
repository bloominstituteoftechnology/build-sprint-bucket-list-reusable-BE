
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {item_name: "Tokyo, Japan", journal_entry:"Best city in the world!", photo: "https://images.unsplash.com/photo-1547448526-5e9d57fa28f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80", completed: true},
        {item_name: "Deer Valley Seafood Buffet", completed: false},
        {item_name: "Harry Potter Series", journal_entry: "My favorites!", photo: "https://images.unsplash.com/photo-1500697017927-23abd276362a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", completed: true}
      ]);
    });
};
