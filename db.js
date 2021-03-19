const mongoose = require('mongoose');
const Note = require('./model/Notes');

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const coding101 = new Note({
  Title: 'Introduction to Github',
  Description: 'learn how to use Github effectively',
  Reminder: true,
});

coding101.save().then(() => console.log('The data have been saved.'));
