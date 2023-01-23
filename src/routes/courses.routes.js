const {Router} = require('express');
const { getAllCourses, getRelationsAllCoursesId, createCourses, updateCourses} = require('../controllers/courses.controller');

const router = Router();

router.get('/courses', getAllCourses);  //Obtener todos los cursos

router.get('/courses/cv', getRelationsAllCoursesId); //Obtener Curso con usuario, categoria y video

router.post('/courses', createCourses); //Crear un nuevo curso

//router.post('/courses', createCourseUser); //Asignar un curso a un usuario

router.put('/courses/:id', updateCourses); //Modificar un curso





module.exports = router;