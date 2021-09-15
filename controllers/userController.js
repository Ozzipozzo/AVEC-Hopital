const app = require('express')();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/UserModel');



exports.userRegister = (req, res) => {

    //retrieving user info
    const { login, password } = req.body;

    //validate user input
    if(!(login, password)) {
        res.status(400).send('All input is required');
    }

    //check if user already exist
    User.findOne({login : login}).then((user) => {
        if(user) {
            return res.status(409).send('Login already exist, please choose another one');
        } else {
            // if not, we create a new user with bcrypt password
            
            const hash = bcrypt.hashSync(password, saltRounds);
            const newUser = new User({
                login: login,
                password: hash
            });
            newUser.save()
            return res.status(200).json({msg: 'User crée'})
        }
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