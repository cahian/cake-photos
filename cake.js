require("dotenv").config();

const express = require("express");
const router = express.Router();

const unsplash = require("unsplash-js");
const images = unsplash.createApi({
  accessKey: process.env.UNSPLASH_KEY,
});

const axios = require('axios');

router.get("/", (req, res) => {
  images.photos.getRandom({ query: "cake" }).then(async (result) => {
    if (result.errors) {
      console.error("Error occurred: ", result.errors[0]);
      res.status(500).send("Internal server error.");
    } else {
      const url = result.response.urls.raw;
      const photo = await axios({
        method: 'GET',
        url: url,
        responseType: 'arraybuffer'
      });

      res.set({
        'Content-Type': 'image/png',
        'Content-Length': photo.data.length
      });
      res.send(photo.data);
    }
  });
});

module.exports = router;
