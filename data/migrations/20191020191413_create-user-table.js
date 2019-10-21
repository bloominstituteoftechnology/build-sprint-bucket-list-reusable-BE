
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl =>{
    tbl.increments();
    tbl
      .string("username", 150)
      .notNullable()
      .unique();

      tbl
        .string("password", 150)
        .notNullable();

      tbl
        .string("email", 150)
        .unique();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users")
};