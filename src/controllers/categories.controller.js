const CategoriesServices = require("../services/categories.services");


const getAllCategories = async (req, res) => {
  try {
    const result = await  CategoriesServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createCategories = async (req, res) => {
  try {
    const newCategory = req.body;
    const result = await CategoriesServices.create(newCategory);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteCategories = async (req, res) => {
  try {
    const {id} = req.params;
    const result = await CategoriesServices.delete(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllCategories,
  createCategories,
  deleteCategories
}