/* eslint-disable no-undef */
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roleId: {
      type: mongoose.Types.ObjectId,
      ref: "Role",
      // required: true,
    },
   },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
