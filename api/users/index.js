const express = require("express");
const db = require("../../database/knex");

const router = express.Router();

router.get("/:id", (req, res) => {
  db("users")
    .where("id", req.params.id)
    .then(results => {
      if (results.length === 0) {
        res.status(500).json({ message: "User not found" });
      } else {
        res.json(results[0]);
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

router.put("/:id", (req, res) => {
  db("users")
    .where("id", req.params.id)
    .update(
      {
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
      },
      "*"
    )
    .then(results => {
      res.json(results[0]);
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
