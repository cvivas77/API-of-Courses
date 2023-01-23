const Categories = require('../models/categories.model');


class CategoriesServices {
  static async getAll() {
    try {
      const result = await Categories.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newCategory) {
    try {
      const result = await Categories.create(newCategory);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Categories.destroy({where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  } 
}

module.exports = CategoriesServices;