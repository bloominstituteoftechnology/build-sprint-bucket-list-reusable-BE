
exports.up = function(knex) {
  return knex.schema
    .createTable("buckets", tbl =>{
      tbl.increments();
      tbl.string('title').notNullable();
      tbl.string('created_by');
    })

    .createTable("items", tbl =>{
      tbl.increments();
      tbl.string('item_name').notNullable();
      tbl.text('journal_entry');
      tbl.string('photo');
      tbl.boolean('completed').defaultTo(false);
    })

    .createTable("user-buckets", tbl =>{
      tbl.increments();
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users');
      tbl
        .integer('bucket_id')
        .unsigned()
        .notNullable()
        .unique()
        .references('id')
        .inTable('buckets');
    })

    .createTable("bucket-items", tbl =>{
      tbl.increments();
      tbl
        .integer('bucket_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('buckets');
      tbl
        .integer('item_id')
        .unsigned()
        .notNullable()
        .unique()
        .references('id')
        .inTable('items');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('buckets')
    .dropTableIfExists('items')
    .dropTableIfExists('user-buckets')
    .dropTableIfExists('bucket-items');
};
