const Users = require('./users.model');
const Videos = require('./videos.model');
const Categories = require('./categories.model');
const UserCourses = require('./usersCourses.model');
const Courses = require('./courses.model');




const initModels = () => {
  Users.hasMany(UserCourses, {as: "user_courses", foreignKey: "user_id"});
  UserCourses.belongsTo(Users, {as: "users", foreignKey: "user_id"});

  UserCourses.belongsTo(Courses, {as: "user_courses", foreignKey: "course_id"});
  Courses.hasMany(UserCourses, {as: "course1", foreignKey: "course_id"})

  Courses.hasMany(Categories, {as: "categories", foreignKey: "course_id"});
  Categories.belongsTo(Courses, {as: "courses", foreignKey: "course_id"});

  Videos.belongsTo(Courses, {as: "courses", foreignKey: "course_id"});
  Courses.hasMany(Videos, {as: "videos", foreignKey: "course_id"});



  
};

module.exports = initModels;