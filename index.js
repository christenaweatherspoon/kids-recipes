const express = require('express')
const hbs = require('hbs')
const parser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')


const app = express()
app.set("view engine", "hbs")

app.use(methodOverride('_method'))

app.use('/assets', express.static('public'))

app.use(parser.json({ extended: true }))

app.use(cors()) 

const recipesController = require('./controllers/recipes')

app.get('/', (req, res) => { 
  res.render('landing')
})


app.use("/recipes", recipesController)

app.set('port', process.env.PORT || 3001)

  app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })


  // json responses instead of view responses 