const express = require('express');
const router = express.Router();
const user = require('../models/UserModel');
const userController = require('../controllers/userController');


// user router with the usercontroller and methods
router.get('/profil', userController.userInfos);
router.post('/login', userController.userLogin);
router.post('/register', userController.userRegister);
router.put('/update/:id', userController.userUpdate);
router.delete('/delete', userController.userDelete);

module.exports = router;