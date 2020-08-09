const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/employees"
);

const employeeSeed = [
  {
    name: "Kevin Lesak",
    position: "Manager",
    idNumber: 1
  },
  {
    name: "Lora Lesak",
    position: "Assistant Manager",
    idNumber: 2
  },
  {
    name: "Steve Hernandez",
    position: "Shift Supervisor",
    idNumber: 17
  },
  {
    name: "Jennifer Zurita",
    position: "Shift Supervisor",
    idNumber: 18
  },
  {
    name: "Christian Erickson",
    position: "Shift Supervisor",
    idNumber: 19
  },
  {
    name: "Latasha Lear",
    position: "Retail",
    idNumber: 31
  },
  {
    name: "Liz Schettino",
    position: "Retail",
    idNumber: 32
  },
  {
    name: "Alyssa Ferro",
    position: "Retail",
    idNumber: 33
  },
  {
    name: "Marla Marcano",
    position: "Retail",
    idNumber: 34
  },
  {
    name: "George Martin",
    position: "Retail",
    idNumber: 35
  },
  {
    name: "Harrison Fisher",
    position: "Retail",
    idNumber: 36
  },
  {
    name: "Michael Davidoff",
    position: "Retail",
    idNumber: 37
  },
];