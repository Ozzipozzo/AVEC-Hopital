const express = require('express');
const router = express.Router();
const user = require('../models/UserModel');
const userController = require('../controllers/userController');

router.get('/profil', userController.userInfos);
router.post('/login', userController.userLogin);
router.post('/register', userController.userRegister);
router.put('/update/:id', userController.userUpdate);
router.delete('/delete/:id', userController.userDelete);

module.exports = router;