const express = require("express");
const serverless = require("serverless-http");

const app = express();
const port = process.env.PORT || 3000;
const cake = require("./cake.js");

app.use("/cake", cake);

app.get("/", (req, res) => {
  res.send("Nothing here.");
});

if (process.env.ENVIRONMENT === 'production') {
  exports.handler = serverless(app);
} else {
  app.listen(port, () => {
    console.log(`Cahian's app listening on port ${port}`);
  });
}
