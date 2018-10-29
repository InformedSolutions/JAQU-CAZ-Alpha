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

module.exports = router
