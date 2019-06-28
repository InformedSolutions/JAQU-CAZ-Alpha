const express = require('express')
const router = express.Router()

router.get('/sign-in', function (req, res) {
  res.render('sign-in', {authenticated: false});
});

router.get('/sign-in-error', function (req, res) {
  res.render('sign-in-error', {authenticated: false});
});

router.get('/guidance', function (req, res) {
  res.render('guidance', {authenticated: true});
});

router.get('/upload', function (req, res) {
  res.render('upload', {authenticated: true});
});

router.get('/upload-error', function (req, res) {
  res.render('upload-error', {authenticated: true});
});

router.get('/success', function (req, res) {
  res.render('success', {authenticated: true})
});

module.exports = router
