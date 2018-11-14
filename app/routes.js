const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/vehicle-checker/local-authority', function (req, res) {
    var localAuthority = req.body['local-authority'];

    if (localAuthority == 'birmingham') {
        res.redirect('/vehicle-checker/birmingham')
    } else if (localAuthority == 'derby') {
        res.redirect('/vehicle-checker/derby')
    } else if (localAuthority == 'leeds') {
        res.redirect('/vehicle-checker/leeds')
    } else if (localAuthority == 'nottingham') {
        res.redirect('/vehicle-checker/nottingham')
    } else if (localAuthority == 'southampton') {
        res.redirect('/vehicle-checker/southampton')
    }
});

router.post('/vehicle-checker/birmingham/compliance', function (req, res) {
    var confirm = req.body['confirm-vehicle'];

    if (confirm == 'yes') {
        res.redirect('/vehicle-checker/birmingham/compliance')
    } else if (confirm == 'no') {
        res.redirect('/vehicle-checker/birmingham/enter-vehicle-details')
    }
});

router.post('/vehicle-checker/leeds/compliance', function (req, res) {
    var confirm = req.body['confirm-vehicle'];

    if (confirm == 'yes') {
        res.redirect('/vehicle-checker/leeds/compliance')
    } else if (confirm == 'no') {
        res.redirect('/vehicle-checker/leeds/enter-vehicle-details')
    }
});

router.post('/vehicle-checker-2/compliance', function (req, res) {
    var confirm = req.body['confirm-vehicle'];

    if (confirm == 'yes') {
        res.redirect('/vehicle-checker-2/local-authority')
    } else if (confirm == 'no') {
        res.redirect('/vehicle-checker-2/enter-vehicle-details')
    }
});

router.post('/vehicle-checker-2/local-authority', function (req, res) {
    var localAuthority = req.body['local-authority'];

    if (localAuthority == 'birmingham') {
        res.redirect('/vehicle-checker-2/birmingham')
    } else if (localAuthority == 'derby') {
        res.redirect('/vehicle-checker-2/derby')
    } else if (localAuthority == 'leeds') {
        res.redirect('/vehicle-checker-2/leeds')
    } else if (localAuthority == 'nottingham') {
        res.redirect('/vehicle-checker-2/nottingham')
    } else if (localAuthority == 'southampton') {
        res.redirect('/vehicle-checker-2/southampton')
    }
});

module.exports = router
