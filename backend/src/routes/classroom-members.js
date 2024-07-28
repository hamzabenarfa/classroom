const router = require('express').Router();

const addMember = require('../controllers/classroom-members')

router.post('/classrooms/:classroomId/students/:studentId', addMember)



module.exports = router