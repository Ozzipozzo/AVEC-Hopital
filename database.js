const moongoose = require('mongoose');
const config = require('./config');
// Middlewares

// Database Connect
const { db: { host, port, name } } = config;
const connnectionString = `mongodb://${host}:${port}/${name}`;
moongoose.connect(connnectionString, { useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true})
.then(() => console.log('Connexion à mongo ok'))
.catch((err) => console.log(err));
