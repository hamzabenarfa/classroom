const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authenticationToken")

const authRoute = require("./auth");
const classRoomRoute = require('./classroom')
const classRoomMembersRoute = require('./classroom-members')

router.use("/auth", authRoute);

router.use(authenticateToken);
router.use('/classroom',classRoomRoute)
router.use('/classroom-members',classRoomMembersRoute)

module.exports = router;