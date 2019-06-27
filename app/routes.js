const express = require('express')
const router = express.Router()

router.get('/upload', function (req, res) {
  res.render('upload', {});
});

router.get('/upload-error', function (req, res) {
  res.render('upload-error', {});
});

module.exports = router
