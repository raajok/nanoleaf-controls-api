var express = require('express');
require('dotenv').config();
var cors = require('cors');

const PORT = 3001;
const HOST = "localhost";

var app = express();
app.use(cors());

var testAPIRouter = require("./routes/testAPI");
var weatherAPIRouter = require("./routes/weather-routes");

app.use("/", testAPIRouter);
app.use("/weatherapi/", weatherAPIRouter);

app.listen(PORT, HOST, () => {
  console.log(`Server started at ${HOST}:${PORT}`);
});