const assert = require('assert');
const Note = require('./Notes');

describe('Reading Notes', () => {
  let note;

  beforeEach((done) => {
    note = new Note({ title: 'New Test', description: 'New test description' });
    note.save().then(() => done());
  });

  it('finds all note with a title New Test', (done) => {
    Note.find({ title: 'New Test' }).then((notes) => {
      notes[0]._id.toString() === note._id.toString();
      done();
    });
  });

  it('find a note with particular id', (done) => {
    Note.findOne({ _id: note._id }).then((note) => {
      assert(note.title === 'New Test');
      done();
    });
  });
});
