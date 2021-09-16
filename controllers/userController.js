const app = require('express')();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');


exports.userRegister = (req, res) => {

    //retrieving user info
    const { login, password } = req.body;

    //validate user input
    if (!(login, password)) {
        res.status(400).send('All input is required');
    }

    //check if user already exist
    User.findOne({ login: login }).then((user) => {
        if (user) {
            return res.status(409).send('Login already exist, please choose another one');
        } else {
            // if not, we create a new user with bcrypt password

            const hash = bcrypt.hashSync(password, saltRounds);
            const newUser = new User({
                login: login,
                password: hash
            });
            newUser.save()
            return res.status(200).json({ msg: 'User crée' })
        }
    })
}

exports.userLogin = (req, res) => {
    const { login, password } = req.body;

    User.findOne({ login }).then((user) => {
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    console.log(user)
                    var token = jwt.sign({user}, 'AVEC', { expiresIn: '1h' });
                    return res.status(200).json({token})
                } else {
                    return res.status(400).send('Incorrect password')
                }
            })
        }
    })
}

exports.userUpdate = (req, res) => {
    // updating an user with the param id, to change from the body id information
    const { id } = req.params
    if(req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
    }
    User.findOneAndUpdate({ _id : id }, req.body, { new: true }, (err, result) => {
        if (err) throw new Error(err);
        return res.status(200).send('Update succesfull !')
    })
}

exports.userDelete = (req, res) => {

    const userToken = req.headers['x-auth-token'];
    const userInfo = jwt.verify(userToken, 'AVEC');

    User.findOneAndRemove({ _id: userInfo.user._id }, (err, result) => {
        if (err) throw new Error(err);
        res.status(200).send('User account deleted with success');
    });
}

exports.userInfos = (req, res) => {

    const userToken = req.headers['x-auth-token'];
    const userInfo = jwt.verify(userToken, 'AVEC');

    if(userInfo) {
        User.findOne({ _id: userInfo.user._id })
        .then((user) => {
            console.log(user)
            return res.status(200).json({user :user.login, role: user.role})
        })
        .catch(e => {
            return res.status(500).send()
        })
    }
}