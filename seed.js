let Item = require('./db/index.js');
let items = require('./data.json');

for (let item of items) {
  let itemo = new Item({
    name: item.name,
    sex: item.sex,
    votes: item.votes,
    vetoed: item.vetoed,
  });
  itemo.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('successfully seeded db');
    }
  });
}