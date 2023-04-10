const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const paymentRoutes = require('./routes/payment')

dotenv.config();

// middlewares
app.use(express.json());
app.use(cors())

//routes
app.use("/api/payment",paymentRoutes);

// port listening
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));