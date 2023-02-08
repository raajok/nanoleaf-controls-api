var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.send("Nanoleaf Controls API");
});

module.exports = router;