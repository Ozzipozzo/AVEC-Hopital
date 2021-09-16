const express = require('express');
const router = express.Router();
const bedController = require('../controllers/bedController');

router.get("/freebed", bedController.freeBedList);
router.post("/create", bedController.createBed);
router.post("/assign", bedController.assignUserBed);
router.post("/unassign", bedController.unassignUserBed);
router.post("/search/bed/:floor", bedController.searchBedByFloor);


module.exports = router;