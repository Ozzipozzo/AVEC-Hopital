const Bed = require('../models/BedModel');
const jwt = require('jsonwebtoken');
const moment = require('moment');

exports.createBed = (req, res) => {

    const { bed, floor, available, start, stop } = req.body;
    console.log(req.body);

    const newBed = new Bed({
        bed: bed,
        floor: floor,
        available: available,
        start: start,
        stop: stop
    })

    newBed.save();
    return res.status(200).send(`bed number ${bed} created on the floor ${floor}`)
}

exports.freeBedList = (req, res) => {

    Bed.find({ available: true }).then((result) => {
        console.log(result)
        return res.status(200).json({ result })
    })
        .catch(err => {
            return res.status(500).send()
        })
}


exports.assignUserBed = (req, res) => {

    const { bedNumber, start, stop } = req.body;

    const userToken = req.headers['x-auth-token'];
    const userInfo = jwt.verify(userToken, 'AVEC');
    
    if (bedNumber && start && stop) {
            Bed.findOneAndUpdate({ _id: bedNumber }, { start, stop, available: false, user: userInfo.user._id }, { new: true })
            .then((result) => {
            
                let userIn = moment(result.start).subtract(10, 'days').calendar();
                let userOut = moment(result.stop).subtract(10, 'days').calendar();

                return res.status(200).json(`Vous avez reservé le lit n° ${result.bed} à l'étage ${result.floor} du ${userIn} au ${userOut}`)
            })
        } else {
            return res.status(404).send(" Merci de renseigner tous les champs")
        }
}


exports.unassignUserBed = (req, res) => {

    const userToken = req.headers['x-auth-token'];
    const userInfo = jwt.verify(userToken, 'AVEC');
    const userBed = userInfo.user._id;
    const { bedNumber } = req.body;

    Bed.findOneAndUpdate({ user : userBed}, { start: null, stop: null, available: true, user: null}, {new: true})
        .then((result) => {
            return res.status(200).json(`le lit ${result.bed} à l'étage ${result.floor} est de nouveau disponible`)
        })
}

exports.searchBedByFloor = (req, res) => {

    const { floor } = req.params;

    Bed.find({floor : floor, available: true})
    .then((result) => {
        return res.status(200).json({result})
    })

}

exports.searchUserBed = (req, res) => {

    const userToken = req.headers['x-auth-token'];
    const userInfo = jwt.verify(userToken, 'AVEC');
    const userBed = userInfo.user._id;

    Bed.findOne({ user : userBed })
        .then((result) => {
            return res.status(200).json(`Votre lit porte le numéro: ${result.bed} à l'étage ${result.floor}`)
        })
        .catch(e => {
            return res.status(409).send("Vous n'avez pas reservé de lit")
        })

}