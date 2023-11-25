const express = require("express");
const cake = require("./cake.js");

const app = express();
const port = process.env.PORT || 3000;

app.use("/cake", cake);

app.get("/", (req, res) => {
  res.send("Nothing here.");
});

app.listen(port, () => {
  console.log(`Cahian's app listening on port ${port}`);
});
