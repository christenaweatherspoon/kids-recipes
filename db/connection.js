const mongoose = require('mongoose')

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.ds013495.mlab.com:13495/db_kidsrecipes)
} else {
  mongoose.connect("mongodb://localhost/db_kidsrecipes");
}
mongoose.Promise = Promise

module.exports = mongoose
