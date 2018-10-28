const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 6000;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./client/build"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//parse application/text
app.use(bodyParser.text());
// parse application/json
app.use(bodyParser.json());


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
