const mongoose = require("../db/connection")

const usersSchema = new mongoose.Schema({
  username: String,
  password: String
})

const users = mongoose.model("users", usersSchema)

module.exports = users
