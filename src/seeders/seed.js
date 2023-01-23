const Users = require('../models/users.model');
const Videos = require('../models/videos.model');
const Categories = require('../models/categories.model');
const Courses = require('../models/courses.model');
const UsersCourses = require('../models/usersCourses.model');
const db = require('../utils/database');

const users = [
  {firstname: "Carolina", lastname: "Vivas", email: "clvivas77@gmail.com", password: "4545"},
  {firstname: "Antonio", lastname: "Marquez", email: "antom@gmail.com", password: "6688"},
  {firstname: "Pepe", lastname: "Vivas", email: "gato@gmail.com", password: "1574"},
];

const courses = [
  {title: "Java for beginners", description: "first steps of the Java language", instructor: "Oracle"},
  {title: "JavaScript for beginners", description: "first steps of the JavaScript language", instructor: "JS"},
  {title: "Blender for beginners", description: "first steps in Blender", instructor: "Blender Foundation"},
];

const categories = [
  {name: "Beginner", courseId: 1},
  {name: "Intermediate", courseId:3},
  {name: "Advanced", courseId: 2}
];

const videos = [
  {title: "Programming Fundamentals", url: "http://oraclr.com", courseId: 2},
  {title: "Programming Advanced", url: "http://oracler.com", courseId: 1},
  {title: "Good practices in Programming", url: "http://oraclar.com", courseId: 3},
  {title: "Terminal Handling", url: "http://oraclur.com", courseId: 1},
  {title: "Learn about Blender tools", url: "http://blender.com", courseId: 3},
];

const usersCourses = [
  {userId: "1", courseId: "1"},
  {userId: "1", courseId: "2"},
  {userId: "2", courseId: "3"},
  {userId: "2", courseId: "1"},
  {userId: "3", courseId: "2"},
  {userId: "3", courseId: "3"},
];

db.sync({force: true})
  .then(() => {
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 100);
    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 250);
    setTimeout(() => {
      videos.forEach((video) => Videos.create(video));
    }, 400);
    setTimeout(() => {
      usersCourses.forEach((usercourse) => UsersCourses.create(usercourse));
    }, 550);
  })
  .catch((error) => console.log(error));

