/* GET home page */
module.exports.homelist = function (req, res) {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
        locations: [{
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
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function (req, res) {
    res.render('locations-info', {
        title: 'Location info',
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m',
            openingHours: ['Monday - Friday : 7:00am - 7:00pm','Saturday : 8:00am - 5:00pm','Sunday : closed'],
            map: 'http://maps.googleapis.com/maps/api/staticmap?center=51.455041,-0.9690884&zoom=17&size=400x350&sensor=false&markers=51.455041,-0.9690884&scale=2',
            reviews: [{
                author: 'Simon Holmes',
                timestamp: '16 July 2013',
                rating: '5',
                text: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                timestamp: '17 July 2013',
                rating: '3',
                text: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
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