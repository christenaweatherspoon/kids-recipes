const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')
const methodOverride = require('method-override')

const app = express()
app.set("view engine", "hbs")

app.use(methodOverride('_method'))
app.use('/recipes/assets', express.static('public'))
app.use(parser.urlencoded({ extended: true }))

const recipesController = require('./controllers/recipes')

app.get('/', (req, res) => { 
  res.render('index')
})

app.use("/recipes", recipesController)

app.listen(3000, () => console.log("Running on port http://localhost:3000!"))