const Bed = require('../models/BedModel');


exports.createBed = (req, res) => {

    const { bed, floor, available, start, stop } = req.body;
    console.log(req.body);

    const newBed =  new Bed({
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

    Bed.find({available: true}).then((result) => {
        console.log(result)
        return res.status(200).json({result})
    })
    .catch(err => {
        return res.status(500).send()
    })
}


exports.assignUserBed = (req, res) => {
    const userToken = req.headers['x-auth-token'];
    const userInfo = jwt.verify(userToken, 'AVEC');

}