var express = require('express');
require('dotenv').config();
var cors = require('cors');

const PORT = 3001;
const HOST = "localhost";

var app = express();
app.use(cors());

var testAPIRouter = require("./routes/testAPI");

app.use("/", testAPIRouter);

app.listen(PORT, HOST, () => {
  console.log(`Starting server at ${HOST}:${PORT}`);
});