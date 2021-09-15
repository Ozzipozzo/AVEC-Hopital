const express = require('express');
const router = express.Router();
const user = require('../models/UserModel');
const userController = require('../controllers/userController');

router.get('/profil/:id', userController.userInfos);
router.post('/login', userController.userLogin);
router.post('/register', userController.userRegister);
router.put('/update/:id', userController.userUpdate);
router.delete('/delete', userController.userDelete);
module.exports = router;