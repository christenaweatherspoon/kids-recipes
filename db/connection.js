const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/db_kidsrecipes')

mongoose.Promise = Promise

module.exports = mongoose
