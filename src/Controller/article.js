const express = require('express');
const router = express.Router();
const apicache = require("apicache");
let cache = apicache.middleware;

const Art = require("../models/article_model");

router.post("", async (req, res) => {
    try {
        const article = await Art.create(req.body);
        return res.status(201).send(article)
    } catch (err) {
        return res.status(500).send(err.message)
    }

})

router.get("", cache("15 minutes"),async (req, res) => {
    const page= req.query.page || 1
    const size = req.query.size || 5
    try {
        const article = await Art.find().skip((page - 1)*size).limit(size)
        .lean().exec()
        return res.send(article)

    } catch (err) {
        return res.status(500).send(err.message);
    }
})

router.get("/search", async (req, res) => {
    const title = req.query.title || ""
    const author= req.query.author || ""

    try {
        const article = await Art.find({"$or":[{"title":{$regex:title}},{"author":{$regex:author}}]})
        .lean().exec();
        return res.send(article);
    } catch (err) {
        return res.status(500).send(err.message)
    }
})
module.exports = router;