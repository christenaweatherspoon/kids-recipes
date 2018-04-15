const mongoose = require("..db/connection")

const recipesSchema = new mongoose.Schema({
  name: String,
  ingredients: String,
  instructions: String
})


module.exports = recipe