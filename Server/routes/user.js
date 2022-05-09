const express = require("express");
const router = express.Router();
const { createUser, signIn, getAllUsers } = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/signup", createUser);
router.get("/users", getAllUsers);
router.post("/signin", signIn);

debugger;

router.get("/user/logout", async (req, res) => {
  try {
    // req.user.tokens = req.user.tokens.filter((token) => {
    //   return token.token !== req.token;
    // });
    // // console.log(req.user);
    //  await req.user.save();
    res.send("done");
  } catch (e) {
    console.log("500 internal weeooe");
    res.status(500).send(e);
  }
});

module.exports = router;
