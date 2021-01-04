const express = require("express");
const router = express.Router();
const passport = require("passport");
const authRouter = require("./auth/auth");

router.use("/auth", authRouter);
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  function (req, res) {
    res.send(req.user);
  }
);

module.exports = router;
