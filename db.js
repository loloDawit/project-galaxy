const mongoose = require("mongoose");
const Note = require("./model/Notes");

mongoose.connect(
  "mongodb+srv://dev-user:newUser2021@seattle.eqx8h.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const coding101 = new Note({
  Title: "Introduction to Github",
  Description: "learn how to use Github effectively",
  Reminder: true,
});

coding101.save().then(() => console.log("The data have been saved."));
