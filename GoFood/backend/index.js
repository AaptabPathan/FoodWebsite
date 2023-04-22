const express = require("express");
// const bodyParser = require('body-parser');

require("./db/conn");

const app = express();

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api", require("./db/routes/CreateUser"));
app.use("/api", require("./db/routes/DisplayData"));

app.get("/", (req, res) => {
  res.send("hello world!!");
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});
