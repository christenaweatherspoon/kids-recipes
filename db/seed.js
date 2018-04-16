const recipes = require('../models/recipes')

const seedData = require('./seeds.json')

recipes.remove({})
  .then(() => {
    return recipes.collection.insert(seedData)
  })
  .then((data) => {
    console.log(data)
    process.exit()
  })