/* eslint-disable no-undef */
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

connectDB();
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// api's routes

/* app.use('/api', )
app.use('/api/users', ) */

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});