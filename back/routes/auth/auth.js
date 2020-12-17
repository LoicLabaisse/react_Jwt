const express = require("express");
const connection = require("../../helpers/db");
const router = express.Router();

router.post("/signup", (req, res, next) => {
  const { email, password, name, lastname } = req.body;
  connection.query(
    "INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)",
    [email, password, name, lastname],
    (err, result) => {
      if (err) {
        res.status(500).send("error");
      } else {
        return res.status(200).send("AllRight");
      }
    }
  );
});
module.exports = router;
