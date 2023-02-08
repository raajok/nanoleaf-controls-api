const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.get("/:city", (req, res) => {
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.city}&appid=${process.env.WEATHER_API_KEY}&units=metric`)
    .then(result => {
      res.json(result.data);
    }).catch(error => {
      console.log(error.message);
      return res.status(400).json({error: 'City name is wrong'});
    });
});

module.exports = router;