const express = require("express");
const { createComments } = require("../controllers/commentsController");
const { createPost } = require("../controllers/postController");
const router = express.Router();


//Import Controller
// const {createComments} = require("../controllers/CommentsController")



//Mapping Create 
router.post("/comments/create", createComments);
router.post("/post/create", createPost);


//export
module.exports = router;
