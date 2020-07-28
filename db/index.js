const mongoose = require('mongoose');
const DB_URI = process.env.DB_URI || 'mongodb://localhost/babyNames';

mongoose.connect(DB_URI, {
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
  vetoed: Boolean,
});

let Name = mongoose.model('Name', nameSchema);

module.exports = Name;
