var path = require('path');
var express = require('express');
var router = express.Router();

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
router.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
});
router.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
});

module.exports = router;