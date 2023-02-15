const express = require("express");
const router = express.Router();
// const bcrypt = require("bcryptjs");
const mysql = require("mysql");
// const jwt = require("jsonwebtoken");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs-login",
});

router.get("/", (req, res, next) => {
  db.query("SELECT * FROM orders", (error, shipments) => {
    if (error) {
      res.status(500).json({
        code: 500,
        payload: null,
        message: error,
      });
    } else {
      res.status(200).json({
        code: 200,
        payload: { shipments },
        message: "Shipments fetched.",
      });
    }
  });
});
router.post("/", (req, res, next) => {
  db.query(
    "INSERT INTO shipments(senderAddress, recipientAddress, length, width, height, weight, riderID) VALUES(?, ?, ?, ?, ?, ?, ?)",
    [],
    (error, shipment) => {
      if (error) {
        res.status(500).json({
          code: 500,
          payload: null,
          message: error,
        });
      } else {
        res.status(200).json({
          code: 200,
          payload: { shipment },
          message: "Shipments scheduled.",
        });
      }
    }
  );
});
router.put("/", (req, res, next) => {});
router.delete("/", (req, res, next) => {});

module.exports = router;
