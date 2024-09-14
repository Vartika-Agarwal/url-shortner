const express = require("express");
const { handleshortURL, handleredirectURL, handlegetanalytics, handleviews,}= require("../controllers/url");

const router = express.Router();

router.post("/",handleshortURL);

router.get("/:shortid",handleredirectURL);

router.get("/analytics/:shortid",handlegetanalytics);

router.get("/",handleviews);


module.exports = router;