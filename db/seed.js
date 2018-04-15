const recipe = require('../models/recipes')

const seedData = require("./seeds.json")

recipe.remove({})
  .then(() => {
    return recipe.collection.insert(seedData)
  })
  .then((data) => {
    console.log(data)
    process.exit()
  })