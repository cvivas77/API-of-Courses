const Courses = require('../models/courses.model');
const Users = require('../models/users.model');
const UsersCourses = require('../models/usersCourses.model');

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async addcourse(course) {
    try {
      const result = await UsersCourses.create(course);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(field, id) {
    try {
      const result = await Users.update(field, {where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Users.destroy({where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  } 

  static async getUserWithCourses(id) {
    try {
      const result = await Users.findOne({
        where: {id},
        attributes: {
          exclude: ["password", "createdAt", "updatedAt" ]
        },
        include: {
          model: UsersCourses,
          as: "user_courses",
          attributes: ["id"],
          include: {
            model: Courses,
            as: "user_courses",
            attributes: {
              exclude: ["createdAt", "updatedAt", "isComplete" ]
            },
          },

        }
      })
      return result;
    } catch (error) {
      throw error;
    }
  }
}


module.exports = UserServices;