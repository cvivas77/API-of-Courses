const {Router} = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, getUserWithCoursesId, createUserWitnCourseId } = require('../controllers/users.controller');


const router = Router();

router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

router.get('/users/:id/courses', getUserWithCoursesId);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

router.post('/users/:id/courses/:courseId', createUserWitnCourseId)



module.exports = router;