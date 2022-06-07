const express = require('express');

const router = express.Router();
const bookController = require("../controller/bookcontroller")
router.post("/createbook" , bookController.createBooks)
// const kingR= require('../lgoger/logger')
// router.get("/test-me",kingR.welcome)
// const{date,getBatchInfo} = require("../util/helper")
// router.get("/test-me1",date)
// // router.get("/test-me2",getBatchInfo)
// const{trim} = require('../validator/formatter')
// const{up} = require('../validator/formatter')
// router.get("/test-me-4",trim)
// router.get("/test-me-5",up)
// const k ='functionUp'
// console.log(k.toLowerCase())
// console.log(k. toUpperCase)
module.exports = router;
  