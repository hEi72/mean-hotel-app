var hotelData = require('../data/hotel-data.json');
const { parseJSON } = require('jquery');

var hotelsGetAll = function(req, res) {
    console.log('GET all hotels');
    console.log(req.query);

    // init default value for query string param
    var offset = 0;
    var count = 5;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10); // update the offset value if there's any in the query string
    }
    
    if (req.query && req.query.count) {
        count = parseInt(req.query.count, 10); // update the offset value if there's any in the query string
    }

    var returnData = hotelData.slice(offset, offset+count); // slice array data for pagination

    res
        .status(200)
        .json(returnData)
};

var hotelsGetOne = function(req, res) {
    var hotelId = req.params.hotelId;
    var thisHotel = hotelData[hotelId];
    console.log('GET one hotels. Id:', hotelId);
    console.log('param', req.params);
    res
        .status(200)
        .json(thisHotel)
};

var hotelsAddOne = function(req, res) {
    console.log('POST one hotels');
    console.log('body', req.body);
    console.log(hotelData);
    res
        .status(200)
        .json(req.body)
};

module.exports.hotelsGetAll = hotelsGetAll;
module.exports.hotelsGetOne = hotelsGetOne;
module.exports.hotelsAddOne = hotelsAddOne;