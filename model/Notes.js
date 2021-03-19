const mongoose = require("mongoose");

const Note = mongoose.model("Note", {
  Title: String,
  Description: String,
  Reminder: Boolean,
});
module.exports = Note;

