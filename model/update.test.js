const assert = require('assert');
const Note = require('./Notes');

function assertName(operation, done) {
  operation.then(() =>
    Note.find({}).then((notes) => {
      assert(notes.length === 1);
      assert(notes[0].title === 'New Test2');
      done();
    })
  );
}

describe('Updating records', () => {
  let note;

  beforeEach((done) => {
    note = new Note({ title: 'New Test', description: 'New test description' });
    note.save().then(() => done());
  });

  it('instance type using set n save', (done) => {
    note.set({ title: 'New Test2' });
    assertName(note.save(), done());
  });

  it('A model instance can update', (done) => {
    assertName(note.updateOne({ title: 'New Test2' }), done());
  });

  it('A model class can update', (done) => {
    assertName(
      Note.updateOne({ title: 'New Test' }, { title: 'New Test2' }),
      done()
    );
  });

  it('A model class can update one record', (done) => {
    assertName(
      Note.findOneAndUpdate({ title: 'New Test' }, { title: 'New Test2' }),
      done()
    );
  });

  it('A model class can find a record and update it', (done) => {
    assertName(
      Note.findByIdAndUpdate(note._id, { title: 'New Test2' }),
      done()
    );
  });
});
