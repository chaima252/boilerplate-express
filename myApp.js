require('dotenv').config();

let express = require("express");
let app = express();


console.log("corrected env");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  const absolutePath = __dirname + "/views/index.html";

  res.sendFile(absolutePath);
});

app.get("/json", function(req, res) {
  const messageStyle = process.env.MESSAGE_STYLE;
  
  let responseObject = {"message": "Hello json"};
  
  if (messageStyle === "uppercase") {
    responseObject.message = responseObject.message.toUpperCase();
  }
  
  res.json(responseObject);
});

module.exports = app;
