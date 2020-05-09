const router = require("express").Router();
// pulling the books we find/post and delete from the functions in the controller, from the api call
const booksController = require("../../controllers/booksController");

router.route("/")
// on the home page route the findings in a sorted fashion from the controller
.get(booksController.findAll)
.post(booksController.create);

router.route("/:id")
// remove the book by id
.delete(booksController.remove);

module.exports = router;