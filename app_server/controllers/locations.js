var request = require('request');
var apiOptions = {
    server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
    apiOptions.server = "https://stark-crag-7519.herokuapp.com";
}

var renderHomepage = function(req, res, responseBody){
    var message;
    if (!(responseBody instanceof Array)) {
        message = "API lookup error";
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = "No places found nearby";
        }
    }
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: responseBody,
        message: message

            /* commented out to test API responseBody
            [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Unicorn Cafe',
            address: '123 Unicorn Road, Rainbows, RG6 1PS',
            rating: 4,
            facilities: ['Rainbow', 'Extreme wifi', 'Hot marshmallows'],
            distance: '200m'
        }, {
            name: 'Chippy',
            address: 'Super Chippy Road, 1 Chippy Chip, 33333',
            rating: 7,
            facilities: ['Hot nuts', 'Seeds', 'God-like wifi'],
            distance: '1m'
        }]
        */
    });
};

var _formatDistance = function (distance) {
    var numDistance, unit;
    if (distance > 1) {
        numDistance = parseFloat(distance).toFixed(1);
        unit = 'km';
    } else {
        numDistance = parseInt(distance * 1000,10);
        unit = 'm';
    }
    return numDistance + unit;
};

module.exports.homelist = function (req, res) {
    var requestOptions, path;
    path = '/api/locations';
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {},
        qs : {
            lng : -0.98700099,
            lat : 53.3211,
            maxDistance : 300
        }
    };
    request(
        requestOptions,
        function(err, response, body) {
            var i, data;
            data = body;
            if (response.statusCode === 200 && data.length) {
                for (i=0; i<data.length; i++) {
                    data[i].distance = _formatDistance(data[i].distance);
                }
            }
            renderHomepage(req, res, data);
        }
    );


};



module.exports.locationInfo = function (req, res) {
    var requestOptions, path;
    path = "/api/locations/" + req.params.locationid;
    requestOptions = {
        url : apiOptions.server + path,
        method : "GET",
        json : {}
    };
    console.log("test: got zero");
    request(
        requestOptions,
        function(err, response, body) {
            var data = body;
            data.coords = {
                lng : body.coords[0],
                lat : body.coords[1]
            };
            console.log("Test: got one");
            renderDetailPage(req, res, data);
            console.log("Test: got three");
        }
    );
    console.log("Test: got four ");
};

/* GET 'Location info' page */
var renderDetailPage = function (req, res, locDetail) {
    res.render('locations-info', {
        title: locDetail.name,
        pageHeader: {title: locDetail.name},
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: locDetail

    });
    console.log("Test: got two" + locDetail.name + " " + locDetail);
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        },
        user: {
            displayName: "Slevin"
        }
    });
};