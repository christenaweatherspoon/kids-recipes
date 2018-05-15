exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('comments', table => {
      table.increments('id').primary()
      table.string('comment')
      table.string('creator')
      table.integer('recipes_id').references('recipes.id')
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('comments')
  ])
}