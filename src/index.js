// import express from 'express'
//import { engine } from 'express-handlebars';
const path = require('path');
const handlebars = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override')
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
app.use(express.static(path.join(__dirname, 'public')));

db.connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//HTTP logger
app.use(morgan('combined'));
//Template engine
app.use(methodOverride('_method'))
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a,b) => a+b, 
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
//console.log('Path: ', path.join(__dirname, 'resources', 'views'))

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
