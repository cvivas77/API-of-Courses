const CourseServices = require('../services/courses.services');


const getAllCourses = async (req, res) => {
  try {
    const result = await  CourseServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getRelationsAllCoursesId = async (req, res) => {
  try {
    const {id} =  req.params;
    const result = await CourseServices.getRelationsAllCourse(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};


const createCourses = async (req, res) => {
  try {
    const newCourse = req.body;
    const result = await CourseServices.createCourses(newCourse);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

/*const createCourseUser = async (req, res) => {
  try {
    const newCourse = req.params;
    const result = await CourseServices.create(newCourse);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}*/

const updateCourses = async (req, res) => {
  try {
    const {id} = req.params;
    const {description} = req.body;
    const field = {description};
    const result = await CourseServices.updateCourses(field, id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};



module.exports = {
  getAllCourses,
  getRelationsAllCoursesId,
  createCourses,
  //createCourseUser,
  updateCourses,
};