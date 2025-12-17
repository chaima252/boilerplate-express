let express = require("express");
let app = express();

// app.get("/", function (req, res) {
//   res.send("Hello Express");
// });
console.log("Serve Static Assets");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  const absolutePath = __dirname + "/views/index.html";

  res.sendFile(absolutePath);
});

module.exports = app;
