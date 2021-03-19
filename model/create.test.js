const assert = require('assert');
const mongooseconnection = require('mongoose');
const Note = require('./Notes');

describe('Database CURD Tests', function () {
  //Before starting the test, create a sandboxed database connection
  //Once a connection is established invoke done()
  before(function (done) {
    mongooseconnection.connect(
      'mongodb+srv://dev-user:newUser2021@seattle.eqx8h.mongodb.net/test',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    const connection = mongooseconnection.connection;

    connection
      .once('open', () => {
        console.log('Connected!');
        done();
      })
      .on('error', (error) => {
        console.warn('Error : ', error);
      });
    beforeEach((done) => {
      connection.db.dropCollection('notes', (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
        console.log('Collection dropped');
        done();
      });
    });
  });

  describe('Creating documents', () => {
    it('creates a Note', (done) => {
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
  // After all tests are finished drop database and close connection
  after(function (done) {
    mongooseconnection.connection.db.dropDatabase(function () {
      console.log(
        `${mongooseconnection.connection.db.databaseName} database dropped.`
      );
      mongooseconnection.connection.close(done);
    });
  });
});
