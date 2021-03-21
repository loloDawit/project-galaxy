const assert = require('assert');
const Note = require('../model/Notes');
let note;

beforeEach(() => {
  note = new Note({ title: 'New Test', description: 'New test description' });
  note.save().then(() => done());
});

describe('Missing required attribute', () => {
  it('should not', (done) => {
    Note.findOne({ title: 'New Test' }).then((note) => {
      assert(note.title === 'New Test');
      done();
    });
  });
});
