var table = require('../data/table.js');
var wait = require('../data/wait.js');
var path = require('path');
var express = require('express');
var router = express.Router();

router.post("/api/new/table", function (req, res) {
    var newCustomer = req.body;

    console.log(newCustomer);

    table.push(newCustomer);
    console.log('Reservation is made');

    res.json(newCustomer);
});

router.post("/api/new/wait", function (req, res) {
    var newCustomer = req.body;

    wait.push(newCustomer);
    console.log('New customer on waiting list');

    res.json(newCustomer);
});

router.get('/api/table', function (req, res) {
    var data = table.get();
    console.log(data);
    return res.json(data);
});

router.get('/api/wait', function (req, res) {
    var data = wait.get();
    console.log(data);
    return res.json(data);
});
module.exports = router;
