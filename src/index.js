// import express from 'express'
//import { engine } from 'express-handlebars';
const path = require('path')
const handlebars = require('express-handlebars');
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))
//console.log('Path: ', path.join(__dirname, 'public', 'img'))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))
//console.log('Path: ', path.join(__dirname, 'resources', 'views'))

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
