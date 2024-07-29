const router = require('express').Router();

const {createClassroom,getMyClassrooms} = require('../controllers/classroom')

router.get('/myclassrooms', getMyClassrooms)  
router.post('/',createClassroom)



module.exports = router