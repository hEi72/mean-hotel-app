var express = require('express');
var router = express.Router();
var path = require('path');

router
    .route('/')
    .get(function(req, res) {
        console.log('GET file index');
        res
            .status(200)
            .json({'jsonData': 'I am file index'})
    });

router
    .route('/file')
        .get(function(req, res) {
            console.log('GET file');
            res
                .status(200)
                .sendFile(path.join(__dirname, '../app.js'))
        });

module.exports = router;