const express = require("express");
const router = express.Router();
const { createUser, signIn , getAllUsers } = require("../controllers/user");
const auth = require("../middleware/auth");

router.post("/user", createUser);
router.get('/users',getAllUsers);
router.post("/user/login", signIn);

debugger


router.post("/user/logout", auth, async (req, res) => {
  try {
    debugger
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    debugger
    
    
    await req.user.save(); 
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
