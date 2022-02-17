const express = require('express');

const Blogroute = express.Router();

const Blogcontroller = require('../controllers/Blogcontroller')

Blogroute.route('/blogs').get(Blogcontroller)
Blogroute.route('/blogs/:id').get(Blogcontroller)


module.exports = Blogroute