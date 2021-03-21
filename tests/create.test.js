const assert = require('assert');
const Note = require('../model/Notes');

describe('Creates a note', () => {
  it('should create a Note', (done) => {
    const note = new Note({
      title: 'New Test',
      description: 'New test description',
      reminder: true,
    });
    note.save().then(() => {
      assert(!note.isNew);
      done();
    });
  });
});

describe('Missing required attribute', () => {
  it('should not save', (done) => {
    const note = new Note({
      description: 'New test description',
      reminder: true,
    });
    note.save((err) => {
      if (err) {
        return done();
      }
      throw new Error('should generate Error!!');
    });
  });
});
//const assert = require('assert');
// const { title } = require('process');