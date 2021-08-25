const flash = require('express-flash')
const session = require('express-session')
const express = require('express')
const exphbs = require('express-handlebars')
const addTask = require('./FactoryFunctions/addTask')

const app = express()

// initialise session middleware - flash-express depends on it
app.use(session({
    secret : "<add a secret string here>",
    resave: false,
    saveUninitialized: true
}))
  
// initialise the flash middleware
app.use(flash())


//set up middleware
app.engine('handlebars', exphbs({layoutsDir: "views/layouts/"}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
