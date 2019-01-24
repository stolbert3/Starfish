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
<<<<<<< HEAD
    image: "../mulberry-symbols/EN-symbols/",
=======
    image: "../mulberry-symbols/EN-symbols/cornflakes.svg",
>>>>>>> e9ed8184d2ac4e385c193146e69b9be794018886
    complete: false
  },
  {
    taskId: 5,
    name: "Eat Lunch",
<<<<<<< HEAD
    image: "../mulberry-symbols/EN-symbols/",
=======
    image: "../mulberry-symbols/EN-symbols/sandwich.svg",
>>>>>>> e9ed8184d2ac4e385c193146e69b9be794018886
    complete: false
  },
  {
    taskId: 6,
    name: "Eat Dinner",
<<<<<<< HEAD
    image: "../mulberry-symbols/EN-symbols/",
=======
    image: "../mulberry-symbols/EN-symbols/dinner.svg",
>>>>>>> e9ed8184d2ac4e385c193146e69b9be794018886
    complete: false
  },
  {
    taskId: 7,
    name: "Play Inside",
<<<<<<< HEAD
    image: "../mulberry-symbols/EN-symbols/",
=======
    image: "../mulberry-symbols/EN-symbols/play_,_to.svg",
>>>>>>> e9ed8184d2ac4e385c193146e69b9be794018886
    complete: false
  },
  {
    taskId: 8,
    name: "Play Oustide",
<<<<<<< HEAD
    image: "../mulberry-symbols/EN-symbols/",
=======
    image: "../mulberry-symbols/EN-symbols/swing_,_to.svg",
>>>>>>> e9ed8184d2ac4e385c193146e69b9be794018886
    complete: false
  },
  {
    taskId: 9,
    name: "In-home Therapy",
<<<<<<< HEAD
    image: "../mulberry-symbols/EN-symbols/",
=======
    image: "../mulberry-symbols/EN-symbols/speech_language_therapist_1a.svg",
>>>>>>> e9ed8184d2ac4e385c193146e69b9be794018886
    complete: false
  },
  {
    taskId: 10,
<<<<<<< HEAD
    name: "Take Bath",
    image: "../mulberry-symbols/EN-symbols/",
=======
    name: "Take Shower",
    image: "../mulberry-symbols/EN-symbols/shower_1_,_to.svg",
>>>>>>> e9ed8184d2ac4e385c193146e69b9be794018886
    complete: false
  },
  {
    taskId: 11,
    name: "Put on PJs",
<<<<<<< HEAD
    image: "../mulberry-symbols/EN-symbols/",
=======
    image: "../mulberry-symbols/EN-symbols/pyjamas.svg",
>>>>>>> e9ed8184d2ac4e385c193146e69b9be794018886
    complete: false
  },
  {
    taskId: 12,
    name: "Go to Bed",
<<<<<<< HEAD
    image: "../mulberry-symbols/EN-symbols/",
=======
    image: "../mulberry-symbols/EN-symbols/sleep_male_,_to.svg",
>>>>>>> e9ed8184d2ac4e385c193146e69b9be794018886
    complete: false
  }
]

<<<<<<< HEAD
db.User.collection.insertMany(defaultTaskSeed)
=======
db.User
  .remove({})
  .then(() => db.User.collection.insertMany(defaultTaskSeed))
>>>>>>> e9ed8184d2ac4e385c193146e69b9be794018886
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
