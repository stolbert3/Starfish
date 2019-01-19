const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/starfishDB"
);

const defaultTaskSeed = [
  {
    taskId: 1,
    name: "Brush Teeth",
    image: "../mulberry-symbols/EN-symbols/brush_teeth_,_to.svg",
    complete: false
  },
  {
    taskId: 2,
    name: "Brush Hair",
    image: "../mulberry-symbols/EN-symbols/brush_hair_,_to.svg",
    complete: false
  },
  {
    taskId: 3,
    name: "Get Dressed",
    image: "../mulberry-symbols/EN-symbols/change_clothes_,_to.svg",
    complete: false
  },
  {
    taskId: 4,
    name: "Eat Breakfast",
    image: "../mulberry-symbols/EN-symbols/",
    complete: false
  },
  {
    taskId: 5,
    name: "Eat Lunch",
    image: "../mulberry-symbols/EN-symbols/",
    complete: false
  },
  {
    taskId: 6,
    name: "Eat Dinner",
    image: "../mulberry-symbols/EN-symbols/",
    complete: false
  },
  {
    taskId: 7,
    name: "Play Inside",
    image: "../mulberry-symbols/EN-symbols/",
    complete: false
  },
  {
    taskId: 8,
    name: "Play Oustide",
    image: "../mulberry-symbols/EN-symbols/",
    complete: false
  },
  {
    taskId: 9,
    name: "In-home Therapy",
    image: "../mulberry-symbols/EN-symbols/",
    complete: false
  },
  {
    taskId: 10,
    name: "Take Bath",
    image: "../mulberry-symbols/EN-symbols/",
    complete: false
  },
  {
    taskId: 11,
    name: "Put on PJs",
    image: "../mulberry-symbols/EN-symbols/",
    complete: false
  },
  {
    taskId: 12,
    name: "Go to Bed",
    image: "../mulberry-symbols/EN-symbols/",
    complete: false
  }
]

db.User.collection.insertMany(defaultTaskSeed)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
