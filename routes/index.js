const path = require("path");
const router = require("express").Router();
const apiRouts = require("./api");

router.use("/api", apiRouts);

router.use(function (req, res) {
    // seding the results to the index file for display
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;