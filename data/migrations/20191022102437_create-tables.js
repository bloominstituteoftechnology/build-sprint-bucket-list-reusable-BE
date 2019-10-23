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
  })

    .createTable("buckets", tbl =>{
      tbl.increments();
      tbl.string('title').notNullable();
      tbl.string('created_by');
      tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    })

    .createTable("items", tbl =>{
      tbl.increments();
      tbl.string('item_name').notNullable();
      tbl.text('journal_entry');
      tbl.string('photo');
      tbl.boolean('completed').defaultTo(false);
      tbl
      .integer('bucket_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('buckets')
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    }) 
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('items')
    .dropTableIfExists('buckets')
    .dropTableIfExists('users')
};
