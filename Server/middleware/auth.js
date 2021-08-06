const jwt = require("jsonwebtoken");
const User = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace('Bearer ', '');
    
    const decode = jwt.verify(token, "thisisasecreatekey");
    const user = User.findOne({ _id: decode._id, "tokens.token": token });
    

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;

    
    next();
  } catch (e) {
    res.status(401).send("Please Authenticate");
  }
};

module.exports = auth;
