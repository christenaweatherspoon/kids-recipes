const mongoose = require("../db/connection")

const recipesSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  instructions: String
})

const recipes = mongoose.model("recipes", recipesSchema)

module.exports = recipes