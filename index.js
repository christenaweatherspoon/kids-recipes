const express = require('express')
// AS: you don't need to require hbs here since you aren't using the package!
const parser = require('body-parser')
const methodOverride = require('method-override')

const app = express()
app.set('view engine', 'hbs')

app.use(methodOverride('_method'))

app.use('/assets', express.static('public'))

app.use(parser.urlencoded({ extended: true }))

const recipesController = require('./controllers/recipes')

app.get('/', (req, res) => {
  res.render('landing')
})

app.use('/recipes', recipesController)

app.set('port', process.env.PORT || 3001)

// AS: Make sure your indentation is consistent!
app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
