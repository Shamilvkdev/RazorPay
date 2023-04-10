const router = require("express").Router();
const Razorpay = require("razorpay")
const crypto = require("crypto");

router.post("/orders",async(req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.KEY__ID,
            key_secret: process.env.KEY__SECRET
        })
    } catch (error) {

    }
});

module.exports = router;