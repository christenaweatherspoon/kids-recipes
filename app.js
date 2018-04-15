const express = require('express')
const hbs = require('hbs')
const parser = reqiore('body-parser')
const cookieParser = require('cookie-parser')
const usersController = require ('./controllers/users')
const methodOverride = require ('method-override')
const app = express() 
app.set("view engine", "hbs")

app.use(cookieParser())





app.use('/', usersController)

app.use("/:user/recipes", recipesController)

app.listen(3000, () => console.log("Running on port http://localhost:3000!"))