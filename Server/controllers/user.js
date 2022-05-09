const User = require("../models/user");
const {sendMail} = require("../email");

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    
    res.status(201).send({ user, token });
    
    await sendMail(user.name, user.email);
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.signIn = async (req, res) => {
  try {
    const user = await User.findByCredential(req.body.email, req.body.password);

    const token = await user.generateAuthToken();

    res.send({ user, token });
  } catch (e) {
    res.status(400).send("You have entered an invalid username or password");
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
};
