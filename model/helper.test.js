require('dotenv').config();
const mongoose = require('mongoose');

before((done) => {
  mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  mongoose.connection
    .once('open', () => done())
    .on('error', (error) => console.warn('Warning', error));
});

beforeEach((done) => {
  const { notes } = mongoose.connection.collections;
  notes.drop(() => {
    done();
  });
});

// After all tests are finished drop database and close connection
after((done) => {
  mongoose.connection.db.dropDatabase(() => {
    console.log(`${mongoose.connection.db.databaseName} database dropped.`);
    mongoose.connection.close(done);
  });
});
