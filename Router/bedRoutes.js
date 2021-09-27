const express = require('express');
const router = express.Router();
const bedController = require('../controllers/bedController');


// bed router with the bedcontroller and methods

router.get("/freebed", bedController.freeBedList);
router.post("/create", bedController.createBed);
router.post("/assign", bedController.assignUserBed);
router.post("/unassign", bedController.unassignUserBed);
router.post("/search/bed/:floor", bedController.searchBedByFloor);
router.post("/mybed", bedController.searchUserBed);

module.exports = router;