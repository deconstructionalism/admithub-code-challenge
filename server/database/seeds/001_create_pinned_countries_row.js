// empty table and insert seeds
exports.seed = (knex) => {
  return knex('pinned_countries')
    .del()
    .then(async () => {
      return knex('pinned_countries').insert({ id: 1, countries: '[]' })
    })
}
