const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/kidsrecipes')




mongoose.Promise = Promise


module.exports = mongoose
