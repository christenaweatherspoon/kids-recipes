const express = require("express")
const router = express.Router()
const Recipe = require('../models/recipes')

let username = ''

router.get('/new', (req,res) => {
  res.render('new')
})

router.get('/:id', (req,res) => {
  Recipe.findById(req.params.id)
  .then( (recipes) => {
    res.render('show', {recipes, user:req.params})
  })
  .catch(err=> console.log(err))
})

router.get('/', (req, res) => {
  Recipe.find({})
  .then(recipes => {
    res.render('recipes-index', {user: req.user.local.email, recipes})
  })
  .catch(err => console.log(err))
})

router.get('/edit/:id', (req, res) => {
  Recipe.findOne({_id: req.params.id})
  .then( (recipes) => {
    res.render('edit', {recipes} )
  })
})

router.put('/:id', (req, res) => {
  Recipe.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
  .then(recipes => {
    res.redirect('/recipes')
  })
})

router.delete('/:id', (req, res) => {
  Recipe.findOneAndRemove({_id: req.params.id})
  .then(() => {
    res.redirect('/recipes')
  })
})


module.exports = router