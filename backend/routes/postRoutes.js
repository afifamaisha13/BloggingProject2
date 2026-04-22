const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

// routes
router.post("/create-post", postController.createPost);
router.get("/posts", postController.getPosts);
router.delete("/delete-post/:id", postController.deletePost);

module.exports = router;