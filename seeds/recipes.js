exports.seed = function (knex, Promise) {
  return knex('kids_recipes').del().then(() => {
    return knex('kids_recipes').insert([
        {creator: 'Christena', recipe: 'Add a new recipe!'},
    ])
  })
}