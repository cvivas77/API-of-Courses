const db = require('../utils/database');
const {DataTypes} = require('sequelize');
const Users = require('./users.model');
const Courses = require("./courses.model");

const UsersCourses = db.define("users_courses", {
  id: {primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false},
  userId: {type: DataTypes.INTEGER,
          allowNull: false,
          field: "user_id"},
  courseId: {type: DataTypes.INTEGER,
            allowNull: false,
            field: "course_id"}
},
{
  timestamps: false
});

module.exports = UsersCourses;