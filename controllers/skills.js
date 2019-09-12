var Skill = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  del
}

function index(req, res){
  res.render('index', {
    skills: Skill.getAll()
  });
}

function show(req, res){
  res.render('showskill', {
    skill: Skill.getOne(req.params.idx),
    idx: req.params.idx
  });
}

function newSkill(req, res){
  res.render('newSkill');
}

function create(req, res){
  Skill.create(req.body );
  res.redirect('/skills');
  console.log(skills);
}

function del(req, res){
  Skill.del(req.params.id);
  res.redirect('/skills');
}





