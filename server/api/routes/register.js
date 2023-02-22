const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const validateEmail = require("../../validateEmail");
const validatePassword = require("../../validatePassword");

router.post("/", (req, res, next) => {
  console.log("Getting inside POST request");
  const name = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  console.log(name);
  console.log(email);
  console.log(password);


  if (!validateEmail(email)) {
    res.status(500).json({
      code: 500,
      payload: null,
      message: "Invalid email.",
    });
    console.log("Getting past validateEmail if condition");

  } else if (!validatePassword(password)) {
    res.status(500).json({
      code: 500,
      payload: null,
      message: "Weak password.",
    });
    console.log("Getting past validatePassword else if condition");

  } else {
    const mysql = require("mysql");
    const db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "nodejs-login",
    });
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (error, result) => {
      console.log("***********************Getting inside query*********************");
        if (error) {
          res.status(500).json({
            code: 500,
            payload: null,
            message: error,
          });
        } else if (result.length > 0) {
          res.status(501).json({
            code: 501,
            payload: null,
            message: "That email is already in use.",
          });
        } else {
          let hashedPassword = await bcrypt.hash(password, 8);
          db.query(
            "INSERT INTO users(name, email, password) VALUES(?, ?, ?)",
            [name, email,hashedPassword],
            (error, result) => {
              console.log("***********************Getting inside INSERT query*********************");
              if (error) {
                res.status(500).json({
                  code: 500,
                  payload: null,
                  message: error,
                });
              } else {
                res.status(201).json({
                  code: 201,
                  payload: null,
                  message: "User registered!",
                });
              }
            }
          );
        }
      }
    );
  }
});

module.exports = router;
