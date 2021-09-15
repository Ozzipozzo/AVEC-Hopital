const app = require('express')();
const User = require('../models/UserModel');



exports.userRegister = (req, res) => {
    const { login, password } = req.body;
    User.create({ login, password}, (err, result) => {
        if (err) throw new Error(err);
        console.log(result);
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