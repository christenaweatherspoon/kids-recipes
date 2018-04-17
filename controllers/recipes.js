const express = require("express")
const router = express.Router()
const Recipes = require('../models/recipes')


router.get('/new', (req,res) => {
  res.render('new')
})

router.get('/:id', (req,res) => {

  Recipes.findById(req.params.id)
    .then( (recipes ) => {
        res.render('show', { recipes} )
    })
    .catch( err => console.log(err))
});

router.get('/', (req, res) => {
    Recipes.find({})
      .then(recipes => {
        res.render('recipes-index', { recipes });
      })
      .catch(err => console.log(err))
})

router.get('/edit/:id', (req, res) => {
  Recipes.findOne({ _id: req.params.id } )
    .then( (recipes ) => {
      res.render('edit', { recipes } )
    })
})

router.post('/', (req, res) => {
  Recipes.create(req.body)
    .then(
      res.redirect('/recipes')
    )
})

router.put('/:id', (req, res) => {
  Recipes.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(recipes => {
      res.redirect('/recipes')
    })
})

router.delete('/:id', (req, res) => {
    Recipes.findOneAndRemove({ _id: req.params.id })
      .then(() => {
        res.redirect('/recipes')
      })
  })

router.get('', req, res) => {
  Recipes.create(req.body)
  .then( 
    res.redirect ('/recipes')
}
 
module.exports = router