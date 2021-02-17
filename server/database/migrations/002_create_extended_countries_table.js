// run migration
exports.up = (knex) => {
  return (knex.schema
    .createTable('extended_countries', (t) => {
      t.increments('id')
      t.string('alpha3Code', 255).notNullable()
      t.string('flag', 255).notNullable()
      t.string('name', 255).notNullable()
    }))
}

// undo migration
exports.down = (knex) => {
  return knex.schema.dropTable('extended_countries')
}
