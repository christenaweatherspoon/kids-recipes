const recipe = require('../models/recipe')

const seedData = require("./seeds.json")

recipe.remove({})
  .then(() => {
    return recipe.collection.insert(seedData)
  })
  .then((data) => {
    console.log(data)
    process.exit()
  })