// run migration
exports.up = (knex) => {
  return (knex.schema
    .createTable('pinned_countries', (t) => {
      t.increments('id')
      t.json('countries').notNullable()
    }))
}

// undo migration
exports.down = (knex) => {
  return knex.schema.dropTable('pinned_countries')
}
