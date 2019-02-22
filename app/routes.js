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
  if (req.session.data['caz-1'] == "bath"){
    req.session.bathShow = true;
  } else {
    req.session.bathShow = false;
  }

  if (req.session.data['caz-2'] == "birmingham"){
    req.session.birminghamShow = true;
  } else {
    req.session.birminghamShow = false;
  }

  if (req.session.data['caz-3'] == "leeds"){
    req.session.leedsShow = true;
  } else {
    req.session.leedsShow = false;
  }

  if (req.session.data['caz-4'] == "sheffield"){
    req.session.sheffieldShow = true;
  } else {
    req.session.sheffieldShow = false;
  }
  
  res.render('vehicle-checker/compliancePage', {
      optional: true,
      bathShow: req.session.bathShow,
      birminghamShow: req.session.birminghamShow,
      leedsShow: req.session.leedsShow,
      sheffieldShow: req.session.sheffieldShow
  });

});

router.get('/vehicle-checker/compliancePage', function (req, res) {
    
  // Complete tag
  if (req.session.data['caz-1'] == "bath"){
    req.session.bathShow = true;
  } else {
    req.session.bathShow = false;
  }

  if (req.session.data['caz-2'] == "birmingham"){
    req.session.birminghamShow = true;
  } else {
    req.session.birminghamShow = false;
  }

  if (req.session.data['caz-3'] == "leeds"){
    req.session.leedsShow = true;
  } else {
    req.session.leedsShow = false;
  }

  if (req.session.data['caz-4'] == "sheffield"){
    req.session.sheffieldShow = true;
  } else {
    req.session.sheffieldShow = false;
  }
  
  res.render('vehicle-checker/compliancePage', {
      optional: true,
      bathShow: req.session.bathShow,
      birminghamShow: req.session.birminghamShow,
      leedsShow: req.session.leedsShow,
      sheffieldShow: req.session.sheffieldShow
  });
  
});

router.get('/vehicle-checker/summary', function (req, res) {
  // Complete tag
  if (req.session.data['caz-1'] == "bath"){
    req.session.bathShow = true;
  } else {
    req.session.bathShow = false;
  }

  if (req.session.data['caz-2'] == "birmingham"){
    req.session.birminghamShow = true;
  } else {
    req.session.birminghamShow = false;
  }

  if (req.session.data['caz-3'] == "leeds"){
    req.session.leedsShow = true;
  } else {
    req.session.leedsShow = false;
  }

  if (req.session.data['caz-4'] == "sheffield"){
    req.session.sheffieldShow = true;
  } else {
    req.session.sheffieldShow = false;
  }

  res.render('vehicle-checker/summary', {
    optional: true,
    bathShow: req.session.bathShow,
    birminghamShow: req.session.birminghamShow,
    leedsShow: req.session.leedsShow,
    sheffieldShow: req.session.sheffieldShow
  });

});

router.post('/payments/confirm-vehicle', function (req, res) {
  var confirm = req.body['confirm-vehicle'];

  if (confirm == 'yes') {
      res.redirect('/payments/local-authority')
  } else if (confirm == 'no') {
      res.redirect('/payments/incorrect-details')
  }
});

router.post('/payments/paymentPages', function (req, res) {
  var confirm = req.body['caz'];

  res.redirect('/payments/' + confirm)

});

router.post('/payments/pay-money', function (req, res) {
  if (req.session.data['discountSelection-1'] == "blue-badge"){
    req.session.amountDue = '£0.00';
  } else if (req.session.data['discountSelection-2'] == "bath-resident") {
    req.session.amountDue = '£2.50';
  } else if (req.session.data['discountSelection-3'] == "desire") {
    req.session.amountDue = '£3.50';
  } else {
    req.session.amountDue = '£5.00';
  }
  res.render('payments/pay-money', {amountDue: req.session.amountDue});

});

router.post('/payments/selectedPaymentMethod', function (req, res) {
  var method = req.body['payment-method'];

  res.render('payments/' + method, {amountDue: req.session.amountDue});

});

module.exports = router
