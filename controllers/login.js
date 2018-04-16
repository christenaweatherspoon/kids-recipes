const express = require('express')
const router = express.Router()
const User = require('../models/user')
const recipesController = require('../controllers/recipes')


function setUsername(req, res, next) {
  console.log('hi', req.body.username)
  res.locals.username = req.body.username
  return next()
}

router.use(setUsername)

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  attributes = req.body
  user = attributes.username
  console.log(attributes)
  res.locals.username = req.body.username
  res.redirect('/' + user + '/recipes')
})

module.exports = router









module.exports = user