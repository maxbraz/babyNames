const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/babyNames';

mongoose.connect(MONGODB_URI, {
  useMongoClient: true,
});

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('mongo connected');
});

let nameSchema = mongoose.Schema({
  name: String,
  sex: String,
  votes: Number,
  vetoed: Boolean,
});

let Name = mongoose.model('Name', nameSchema);

module.exports = Name;