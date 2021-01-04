const express = require("express");
const connection = require("../../helpers/db");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");
require("../../helpers/strategy");

router.post("/signup", (req, res) => {
  const { email, password, name, lastname } = req.body;
  const hash = bcrypt.hashSync(password, 10);
  connection.query(
    "INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)",
    [email, hash, name, lastname],
    (err) => {
      if (err) {
        res.status(500).json({ flash: err.message });
      } else {
        return res.status(200).json({ flash: "User has been signed up!" });
      }
    }
  );
});

router.post("/signin", (req, res) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!user) {
      return res.status(400).json({ message: info.message });
    }
    const token = jwt.sign(user, process.env.DB_SECRET);
    return res.json({ user, token });
  })(req, res);
});

module.exports = router;
