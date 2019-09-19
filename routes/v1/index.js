require("dotenv").config();

const axios = require("axios");
const router = require("express").Router();

router.get("/events/:city", function (req, res) {
    const city = req.params.city;

    const url = `http://api.eventful.com/json/events/search?app_key=dmcR44C3PdqNC2Dh&location=${city}&date=Future&category=music,comedy,family_fun_kids,festivals_parades,movies_film,food,art,holiday,attractions,community,singles_social,outdoors_recreation,performing_arts,animals,sports,other`;

    axios.get(url)
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(err => {
            res.status(422).json(err);
        });
});

module.exports = router;