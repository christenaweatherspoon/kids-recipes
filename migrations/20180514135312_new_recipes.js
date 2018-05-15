exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('new_recipes', table => {
      table.increments('id').primary()
      table.string('new_recipes')
      table.string('creator')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('new_recipes')
  ])
}