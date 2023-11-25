require("dotenv").config();

const express = require("express");
const unsplash = require("unsplash-js");
const axios = require("axios");

const router = express.Router();
const images = unsplash.createApi({
  accessKey: process.env.UNSPLASH_KEY,
});

router.get("/", (req, res) => {
  images.photos
    .getRandom({
      query: "cake",
    })
    .then((result) => {
      if (result.errors) {
        console.error("Error occurred: ", result.errors[0]);
        res.status(500).send("Internal server error.");
      } else {
        axios({
          method: "GET",
          url: result.response.urls.regular, // regular loads faster
          responseType: "stream",
        }).then((photo) => {
          photo.data.pipe(res);
        });
      }
    });
});

module.exports = router;
