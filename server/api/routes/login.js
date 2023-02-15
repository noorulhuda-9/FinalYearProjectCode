const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs-login",
});

router.post("/", (req, res, next) => {
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [req.body.email],
    async (error, user) => {
      if (error) {
        res.status(500).json({
          code: 500,
          payload: null,
          message: error,
        });
      } else if (user.length < 1) {
        res.status(401).json({
          code: 401,
          payload: null,
          message: "Auth failed.",
        });
      } else {
        await bcrypt.compare(
          req.body.password,
          user[0].password,
          (error, result) => {
            if (error) {
              res.status(401).json({
                code: 401,
                payload: null,
                message: "Auth failed.",
              });
            } else if (result) {
              const token = jwt.sign({}, "secretKey", {
                expiresIn: "1h",
              });
              res.status(201).json({
                code: 201,
                payload: {token,},
                message: "Auth successful.",
              });
            } else {
              res.status(401).json({
                code: 401,
                payload: null,
                message: "Auth failed.",
              });
            }
          }
        );
      }
    }
  );
});

module.exports = router;
