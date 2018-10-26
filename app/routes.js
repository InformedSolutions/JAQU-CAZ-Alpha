const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/vehicle-checker/local-authority', function (req, res) {
   var localAuthority = req.body['local-authority'];

   if (localAuthority == 'birmingham') {
       res.redirect('/vehicle-checker/birmingham/enter-vehicle-details')
   } else {
       res.redirect('/vehicle-checker/discovery')
   }
});

module.exports = router
