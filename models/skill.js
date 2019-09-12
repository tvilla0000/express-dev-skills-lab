const skills = [
  {skill: 'Javascript', description: "Object-Oriented Programming Language!!", level: 'Intermediate'},
  {skill: 'HTML', description: "Used to Structure Layout of Elements on a Page", level: 'Master'},
  {skill: 'CSS', level: 'Master'},
  {skill: 'Express', level: 'Noob'},
  {skill: 'Python', level: 'Beginner'},
];

module.exports = {
  getAll,
  getOne,
  create,
  del 
};

function getAll() {
  return skills;
}

function getOne(id) {
  return skills[id];
}

function create(skill){
  skills.push(skill);
}

function del(id){
  skills.splice(id, 1);
}
