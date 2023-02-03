/* eslint-disable no-undef */
const { config } = require("dotenv");
const mongoose = require("mongoose");

config();

const connectDB = () => {
  try {
    mongoose.connect(process.env.DATABASE_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is connected !");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
