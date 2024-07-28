const router = require('express').Router();

const createClassroom = require('../controllers/classroom')

router.post('/',createClassroom)



module.exports = router