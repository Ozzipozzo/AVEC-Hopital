const express = require('express');
const router = express.Router();
const bedController = require('../controllers/bedController');


router.post("/create", bedController.createBed);

module.exports = router;