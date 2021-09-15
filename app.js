const express = require('express');
const app = require('express')();
const db = require('./database');
const route = require('./Router/routes');
const config = require('./config');


const { app: { port }} = config;

// parsing
app.use(express.json()); 


// Routes
app.use('/api/auth', require('./Router/userRoutes'));


// Server to listen
app.listen(port)

module.exports = app;