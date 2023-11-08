const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployerSchema = new Schema({
  fname: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number
  },
  text: {
    type: String
  }
});

module.exports = mongoose.model("ATIT", EmployerSchema);
