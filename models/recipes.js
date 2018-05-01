const mongoose = require("../db/connection")

// AS: Awesome job with this -- you could make ingredients and instructions arrays so its easier to format your views!
const recipesSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  instructions: String
})

const recipes = mongoose.model("recipes", recipesSchema)

module.exports = recipes
