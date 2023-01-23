const Users = require('../models/users.model');
const Courses = require('../models/courses.model');
const Categories = require('../models/categories.model');
const Videos = require('../models/videos.model');
const UsersCourses = require('../models/usersCourses.model');

class CourseServices {
  //Obtener todos los cursos
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
//Obtener Curso con usuario, categoria y video
  static async getRelationsAllCourse(id) {
    try {
      const result = await Courses.findAll({
        
        include: [
          {model: Categories, as: "categories"},
          {model: Videos, as: "videos"},
          //{model: Users, as: "users"},
          //{model: UsersCourses, as: "courses1"}
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

//Crear un nuevo curso
  static async createCourses(newCourse) {
    try {
      const result = await Courses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }
//Asignar un curso a un usuario
  /*static async create(CourseUser) {
    try {
      const result = await UsersCourses.create(CourseUser);
      return result;
    } catch (error) {
      throw error;
    }
  }*/
//Modificar un curso
  static async updateCourses(field, id){
    try {
      const result = await Courses.update(field, {where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  }
}



module.exports = CourseServices;