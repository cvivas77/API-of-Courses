const Videos = require('../models/videos.model');


class VideoServices {
  static async getAll() {
    try {
      const result = await Videos.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(newVideo) {
    try {
      const result = await Videos.create(newVideo);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Videos.destroy({where: {id}});
      return result;
    } catch (error) {
      throw error;
    }
  } 
}

module.exports = VideoServices;