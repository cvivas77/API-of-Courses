const VideoServices = require("../services/video.services");



const getAllVideos = async (req, res) => {
  try {
    const result = await  VideoServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createVideos = async (req, res) => {
  try {
    const newVideo = req.body;
    const result = await VideoServices.create(newVideo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteVideosId = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await VideoServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllVideos,
  createVideos,
  deleteVideosId
};