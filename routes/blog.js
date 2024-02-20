const express = require("express");
const router = express.Router();


//Import Controller
const {createComments} = require("../controllers/CommentsController")



//Mapping Create 
router.post("/comments/create", createComments);


//export
module.exports = router;
