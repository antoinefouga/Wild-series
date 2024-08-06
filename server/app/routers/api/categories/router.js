const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const { cat, categorieID } = require("../../../controllers/categoryActions");

/* Here you code */

router.get("/", cat);

router.get("/:id", categorieID);

/* ************************************************************************* */

module.exports = router;
