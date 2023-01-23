const {Router} = require('express');
const { getAllCategories, createCategories, deleteCategories } = require('../controllers/categories.controller');


const router = Router();

router.get('/categories', getAllCategories);

router.post('/categories', createCategories);

router.delete('/categories/:id', deleteCategories);



module.exports = router;