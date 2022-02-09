const express = require("express");
const router = new express.Router();
const groupController = require("../controllers/groupController");

router.get("/ippostRouter", groupController.getData);
router.post("/ippostRouter", groupController.postData);

router.post("/ipHomeRouter", groupController.postDataHome);

module.exports = router;
