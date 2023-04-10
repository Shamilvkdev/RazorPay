const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// middlewares
app.use(express>json());
app.use(cors())

// routes
const PORT = process.env.PORT || 7000;
app.listen(port, () => console.log(`listening on port ${PORT}`));