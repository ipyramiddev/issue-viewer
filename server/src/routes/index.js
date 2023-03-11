const express = require("express");
const { viewIssue } = require("../controllers/viewIssue");

const router = express.Router();

router.get("/issues", viewIssue);

module.exports = router;
