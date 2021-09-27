const express = require('express');
const app = require('express')();
const db = require('./database');
const config = require('./config');

// getting port info from config
const { app: { port }} = config;

// parsing information
app.use(express.json()); 


// Routes
app.use('/api/user', require('./Router/userRoutes'));
app.use('/api/room', require('./Router/bedRoutes'));


// Server to connect and listen
app.listen(port)

module.exports = app;