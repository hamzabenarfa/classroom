const router = require('express').Router();

const {addMember,joinClassroom} = require('../controllers/classroom-members')

router.post('/classrooms/:classroomId/students/:studentId', addMember)
router.post('/join-classrooms/:joinKey', joinClassroom)


module.exports = router