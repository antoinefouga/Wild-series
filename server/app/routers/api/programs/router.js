const express = require("express");

const router = express.Router();

// programs

const { browse, read } = require("../../../controllers/programAction");

router.get("/", browse);

router.get("/:id", read);

module.exports = router;
