const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);
//converting pass into hash
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//Generate Auth Token
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, "thisisasecreatekey");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//login functionality

userSchema.statics.findByCredential = async  (email, password)=> {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login");
  }
  const isMatch = bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Unable to login");
  }
  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
