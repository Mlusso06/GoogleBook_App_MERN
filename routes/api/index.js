// creating router for my books.js and using the info from it
const router = require("express").Router();
const bookRoutes = require("./books");

router.use("/books", bookRoutes);

module.exports = router;