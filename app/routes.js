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

router.post('/vehicle-checker/compliance', function (req, res) {
    var confirm = req.body['confirm-vehicle'];

    if (confirm == 'yes') {
        res.redirect('/vehicle-checker/local-authority')
    } else if (confirm == 'no') {
        res.redirect('/vehicle-checker/incorrect-details')
    }
});

router.post('/vehicle-checker/compliancePage', function (req, res) {
    // Complete tag
    if (req.session.data['caz-1'] == "birmingham"){
      req.session.birminghamShow = true;
    } else {
      req.session.birminghamShow = false;
    }
  
    if (req.session.data['caz-2'] == "derby"){
      req.session.derbyShow = true;
    } else {
      req.session.derbyShow = false;
    }
  
    if (req.session.data['caz-3'] == "leeds"){
      req.session.leedsShow = true;
    } else {
      req.session.leedsShow = false;
    }
  
    if (req.session.data['caz-4'] == "nottingham"){
      req.session.nottinghamShow = true;
    } else {
      req.session.nottinghamShow = false;
    }
  
    if (req.session.data['caz-5'] == "southampton"){
      req.session.southamptonShow = true;
    } else {
      req.session.southamptonShow = false;
    }
  
  
res.render('vehicle-checker/compliancePage', {
    optional: true,
    birminghamShow: req.session.birminghamShow,
    leedsShow: req.session.leedsShow,
    derbyShow: req.session.derbyShow,
    nottinghamShow: req.session.nottinghamShow,
    southamptonShow: req.session.southamptonShow
});
});

router.get('/vehicle-checker/compliancePage', function (req, res) {
    // Complete tag
    if (req.session.data['caz-1'] == "birmingham"){
      req.session.birminghamShow = true;
    } else {
      req.session.birminghamShow = false;
    }
  
    if (req.session.data['caz-2'] == "derby"){
      req.session.derbyShow = true;
    } else {
      req.session.derbyShow = false;
    }
  
    if (req.session.data['caz-3'] == "leeds"){
      req.session.leedsShow = true;
    } else {
      req.session.leedsShow = false;
    }
  
    if (req.session.data['caz-4'] == "nottingham"){
      req.session.nottinghamShow = true;
    } else {
      req.session.nottinghamShow = false;
    }
  
    if (req.session.data['caz-5'] == "southampton"){
      req.session.southamptonShow = true;
    } else {
      req.session.southamptonShow = false;
    }
  
  
res.render('vehicle-checker/compliancePage', {
    optional: true,
    birminghamShow: req.session.birminghamShow,
    leedsShow: req.session.leedsShow,
    derbyShow: req.session.derbyShow,
    nottinghamShow: req.session.nottinghamShow,
    southamptonShow: req.session.southamptonShow
});
});

router.get('/vehicle-checker/summary', function (req, res) {
  // Complete tag
  if (req.session.data['caz-1'] == "birmingham"){
    req.session.birminghamShow = true;
  } else {
    req.session.birminghamShow = false;
  }

  if (req.session.data['caz-2'] == "derby"){
    req.session.derbyShow = true;
  } else {
    req.session.derbyShow = false;
  }

  if (req.session.data['caz-3'] == "leeds"){
    req.session.leedsShow = true;
  } else {
    req.session.leedsShow = false;
  }

  if (req.session.data['caz-4'] == "nottingham"){
    req.session.nottinghamShow = true;
  } else {
    req.session.nottinghamShow = false;
  }

  if (req.session.data['caz-5'] == "southampton"){
    req.session.southamptonShow = true;
  } else {
    req.session.southamptonShow = false;
  }


res.render('vehicle-checker/summary', {
  optional: true,
  birminghamShow: req.session.birminghamShow,
  leedsShow: req.session.leedsShow,
  derbyShow: req.session.derbyShow,
  nottinghamShow: req.session.nottinghamShow,
  southamptonShow: req.session.southamptonShow
});
});
module.exports = router
