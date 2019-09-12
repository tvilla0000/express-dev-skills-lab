const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.post('/', skillsCtrl.create);
router.get('/newSkill', skillsCtrl.new);
router.get('/:idx', skillsCtrl.show);
router.delete('/:id', skillsCtrl.del);



module.exports = router;
