const express = require('express');
const app = require('express')();
const db = require('./database');
const route = require('./Router/routes');


// parsing
app.use(express.json()); 


// Routes
app.use('/api/auth', require('./Router/userRoutes'));


// Server to listen
app.listen(3000)

module.exports = app;