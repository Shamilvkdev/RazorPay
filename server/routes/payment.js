const router = require("express").Router();
const Razorpay = require("razorpay")
const crypto = require("crypto");
const { error } = require("console");

router.post("/orders",async(req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.KEY__ID,
            key_secret: process.env.KEY__SECRET
        })

        const options = {
            amount: request.body.amount*100,
            currency: "INR",
            receipt:crypto.randomBytes(10).toString("hex")
        };

        instance.orders.create(options, (err, order) => {
            if (err) {
                console.log(error);
                return res.status(500).json({ error })
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" })
    }
});

module.exports = router;