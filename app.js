const express = require("express");
const app = express();
const port = 3000;

const cake = require("./cake.js");

app.use("/cake", cake);

app.get('/', (req, res) => {
  res.send('Nothing here.')
})

app.listen(port, () => {
  console.log(`Cahian's app listening on port ${port}`);
});
