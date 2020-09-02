var express = require('express');
var router = express.Router();

// Get custom controller
var ctrlHotels = require('../controllers/hotels.controllers');

router
    .route('/')
        .get(function(req, res) {
            console.log('GET json index');
            res
                .status(200)
                .json({'jsonData': 'I am index'})
        });

router
    .route('/hotels')
        .get(ctrlHotels.hotelsGetAll);

router
    .route('/hotels/:hotelId')
        .get(ctrlHotels.hotelsGetOne);

router
    .route('/hotels/new')
        .post(ctrlHotels.hotelsAddOne);

module.exports = router;