const express = require("express");
const router = express.Router();
const controller = require("../controllers/commentController");

router.post("/comment", controller.addComment);
router.get("/comments/:post_id", controller.getComments);

router.post("/like", controller.likePost);
router.get("/likes/:post_id", controller.getLikes);

module.exports = router;