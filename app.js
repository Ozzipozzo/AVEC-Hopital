const express = require('express');
const app = require('express')();
const db = require('./database');
const config = require('./config');


const { app: { port }} = config;

// parsing
app.use(express.json()); 


// Routes
app.use('/api', require('./Router/userRoutes'));
app.use('/api/room', require('./Router/bedRoutes'));


// Server to listen
app.listen(port)

module.exports = app;