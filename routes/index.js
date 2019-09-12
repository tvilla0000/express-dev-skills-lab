var express = require('express');
var router = express.Router();
const Skill = require('../models/skill');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    skills: Skill.getAll()
  });
});

module.exports = router;
