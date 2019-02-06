const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/starfishDB", {"useNewUrlParser": true}
);

const defaultUserSeed = [
  {
    email: "sydney.katurah@gmail.com",
    childName: "Minnie",
    parentName: "Sydney",
    tasks: [
      {
        taskId: 1,
        name: "Brush Teeth",
        image: "../mulberry-symbols/EN-symbols/brush_teeth_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 2,
        name: "Brush Hair",
        image: "../mulberry-symbols/EN-symbols/brush_hair_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 3,
        name: "Get Dressed",
        image: "../mulberry-symbols/EN-symbols/change_clothes_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 4,
        name: "Eat Breakfast",
        image: "../mulberry-symbols/EN-symbols/cornflakes.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 5,
        name: "Eat Lunch",
        image: "../mulberry-symbols/EN-symbols/sandwich.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 6,
        name: "Eat Dinner",
        image: "../mulberry-symbols/EN-symbols/dinner.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 7,
        name: "Play Inside",
        image: "../mulberry-symbols/EN-symbols/play_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 8,
        name: "Play Oustide",
        image: "../mulberry-symbols/EN-symbols/swing_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 9,
        name: "In-home Therapy",
        image: "../mulberry-symbols/EN-symbols/speech_language_therapist_1a.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 10,
        name: "Take Shower",
        image: "../mulberry-symbols/EN-symbols/shower_1_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 11,
        name: "Put on PJs",
        image: "../mulberry-symbols/EN-symbols/pyjamas.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 12,
        name: "Go to Bed",
        image: "../mulberry-symbols/EN-symbols/sleep_male_,_to.svg",
        complete: false,
        checked: false
      }
    ]
  },
  {
    email: "scottjamesritchey@gmail.com",
    childName: "Scott",
    parentName: "Scott",
    tasks: [
      {
        taskId: 1,
        name: "Brush Teeth",
        image: "../mulberry-symbols/EN-symbols/brush_teeth_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 2,
        name: "Brush Hair",
        image: "../mulberry-symbols/EN-symbols/brush_hair_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 3,
        name: "Get Dressed",
        image: "../mulberry-symbols/EN-symbols/change_clothes_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 4,
        name: "Eat Breakfast",
        image: "../mulberry-symbols/EN-symbols/cornflakes.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 5,
        name: "Eat Lunch",
        image: "../mulberry-symbols/EN-symbols/sandwich.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 6,
        name: "Eat Dinner",
        image: "../mulberry-symbols/EN-symbols/dinner.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 7,
        name: "Play Inside",
        image: "../mulberry-symbols/EN-symbols/play_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 8,
        name: "Play Oustide",
        image: "../mulberry-symbols/EN-symbols/swing_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 9,
        name: "In-home Therapy",
        image: "../mulberry-symbols/EN-symbols/speech_language_therapist_1a.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 10,
        name: "Take Shower",
        image: "../mulberry-symbols/EN-symbols/shower_1_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 11,
        name: "Put on PJs",
        image: "../mulberry-symbols/EN-symbols/pyjamas.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 12,
        name: "Go to Bed",
        image: "../mulberry-symbols/EN-symbols/sleep_male_,_to.svg",
        complete: false,
        checked: false
      }
    ]
  },
  {
    email: "ahs4448@gmail.com",
    childName: "Abdul",
    parentName: "Abdul",
    tasks: [
      {
        taskId: 1,
        name: "Brush Teeth",
        image: "../mulberry-symbols/EN-symbols/brush_teeth_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 2,
        name: "Brush Hair",
        image: "../mulberry-symbols/EN-symbols/brush_hair_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 3,
        name: "Get Dressed",
        image: "../mulberry-symbols/EN-symbols/change_clothes_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 4,
        name: "Eat Breakfast",
        image: "../mulberry-symbols/EN-symbols/cornflakes.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 5,
        name: "Eat Lunch",
        image: "../mulberry-symbols/EN-symbols/sandwich.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 6,
        name: "Eat Dinner",
        image: "../mulberry-symbols/EN-symbols/dinner.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 7,
        name: "Play Inside",
        image: "../mulberry-symbols/EN-symbols/play_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 8,
        name: "Play Oustide",
        image: "../mulberry-symbols/EN-symbols/swing_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 9,
        name: "In-home Therapy",
        image: "../mulberry-symbols/EN-symbols/speech_language_therapist_1a.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 10,
        name: "Take Shower",
        image: "../mulberry-symbols/EN-symbols/shower_1_,_to.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 11,
        name: "Put on PJs",
        image: "../mulberry-symbols/EN-symbols/pyjamas.svg",
        complete: false,
        checked: false
      },
      {
        taskId: 12,
        name: "Go to Bed",
        image: "../mulberry-symbols/EN-symbols/sleep_male_,_to.svg",
        complete: false,
        checked: false
      }
    ]
  }
];

db.User
  .create(defaultUserSeed)
 
  .then(data => {
    console.log(data.result + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });