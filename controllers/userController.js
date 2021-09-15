const app = require('express')();
const User = require('../models/UserModel');



exports.userRegister = (req, res) => {

    //retrieving user info
    const { login, password } = req.body;

    //validate user input
    if(!(login, password)) {
        res.status(400).send('All input is required');
    }

    //check if user already exist
    const oldUser = User.findOne({ login })
    console.log(oldUser);
    if (oldUser) {
        return res.status(409).send('Login already exist, please choose another one');
    }

    //Encrypt password
    encryptedPassword = bcrypt.hash(password, 10);
    
    User.create({ login: login.toLowerCase(), password: encryptedPassword}, (err, result) => {
        if (err) throw new Error(err);
        res.status(200).send('Vous êtes enregistré');
    })
}

exports.userDelete = (req, res) => {
    const { id } = req.body
    User.findOneAndRemove({ _id: id }, (err, result) => {
        if (err) throw new Error(err);
        console.log(result);
    });
}

exports.userLogin = (req, res) => {
  
}

exports.userLogout = (req, res, next) => {
   
}