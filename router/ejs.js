const express = require("express");
const router = express.Router(); // Use express router


// Render index.ejs page when the home route is called.
router.get("/", (req, res) => res.render("pages/index"));

// Export router
module.exports = router;
