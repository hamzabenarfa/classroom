const router = require('express').Router();

const {addMember,joinClassroom,getClassroomMembersById} = require('../controllers/classroom-members')

router.post('/classrooms/:classroomId/students/:studentId', addMember)
router.post('/join-classroom/:joinKey', joinClassroom)

router.get('/by-classroom-id/:classRoomId',getClassroomMembersById )

module.exports = router