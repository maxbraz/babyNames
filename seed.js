let Name = require('./db/index.js');
let names = require('./data.json');

for (let name of names) {
  let child = new Name({
    name: name.name,
    sex: name.sex,
    votes: name.votes,
    vetoed: name.vetoed,
  });
  child.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('successfully seeded db');
    }
  });
}