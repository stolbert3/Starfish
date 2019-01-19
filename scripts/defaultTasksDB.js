const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

const defaultTaskSeed = [
  {
    taskId: 1,
    name: "Brush Teeth",
    image: "imagelink",
    complete: false
  },
  {
    taskId: 2,
    name: "Get Dressed",
    image: "imagelink",
    complete: false
  },
  {
    taskId: 3,
    name: "Eat Breakfast",
    image: "imagelink",
    complete: false
  },
  {
    taskId: 4,
    name: "Eat Lunch",
    image: "imagelink",
    complete: false
  },
  {
    taskId: 5,
    name: "Eat Dinner",
    image: "imagelink",
    complete: false
  },
  {
    taskId: 6,
    name: "Eat Snack",
    image: "imagelink",
    complete: false
  },
  {
    taskId: 7,
    name: "Play Inside",
    image: "imagelink",
    complete: false
  },
  {
    taskId: 8,
    name: "Play Oustide",
    image: "imagelink",
    complete: false
  },
  {
    taskId: 9,
    name: "In-home Therapy",
    image: "imagelink",
    complete: false
  },
  {
    taskId: 10,
    name: "Take Bath",
    image: "imagelink",
    complete: false
  },
  {
    taskId: 11,
    name: "Put on PJs",
    image: "imagelink",
    complete: false
  },
  {
    taskId: 12,
    name: "Go to Bed",
    image: "imagelink",
    complete: false
  }
]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(defaultTaskSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
