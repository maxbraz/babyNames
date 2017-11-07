const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/babyNames', {
  useMongoClient: true,
});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('mongo connected');
});

let nameSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  sex: String,
  votes: Number,
  vetoed: Boolean,
});

let Name = mongoose.model('Name', nameSchema);

module.exports = Name;