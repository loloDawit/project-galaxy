const assert = require('assert');
const Note = require('./Notes');

describe('Deleting a note', (done) => {
  let note;
  beforeEach((done) => {
    note = new Note({ title: 'New Testxx', description: 'New test delete' });
    note.save().then(() => done());
  });

  it('model instance remove', (done) => {
    note
      .remove()
      .then(() => Note.findOne({ title: 'New Testxx' }))
      .then((note) => {
        assert(note === null);
        done();
      });
  });

  it('class method remove', (done) => {
    // Remove a bunch of records with some given criteria
    Note.deleteMany({ title: 'New Test2' })
      .then(() => Note.findOne({ title: 'New Test2' }))
      .then((note) => {
        assert(note === null);
        done();
      });
  });

  it('class method findOneAndDelete', (done) => {
    // Remove a bunch of records with some given criteria
    Note.findOneAndDelete({ title: 'New Testxx' })
      .then(() => Note.findOne({ title: 'New Testxx' }))
      .then((note) => {
        assert(note === null);
        done();
      });
  });

  it('class method findByIdAndRemove', (done) => {
    // Remove a bunch of records with some given criteria
    Note.findByIdAndRemove(note._id)
      .then(() => Note.findOne({ title: 'New Test2' }))
      .then((note) => {
        assert(note === null);
        done();
      });
  });
});
