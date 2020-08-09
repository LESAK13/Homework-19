const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  idNumber: Integer
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
