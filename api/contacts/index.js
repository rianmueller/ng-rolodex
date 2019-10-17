const express = require("express");
const db = require("../../database/knex");

const router = express.Router();

router.get("/:id", (req, res) => {
  db("contacts")
    .where("id", req.params.id)
    .then(results => {
      if (results.length === 0) {
        res.status(500).json({ message: "Contact not found" });
      } else {
        res.json(results[0]);
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

router.post("/", (req, res) => {
  if (!req.body.name) {
    return res.status(500).json({ message: "Name is required" });
  }
  db("contacts")
    .insert(
      {
        name: req.body.name,
        address: req.body.address,
        mobile: req.body.mobile,
        work: req.body.work,
        home: req.body.home,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        github: req.body.github
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

router.put("/:id", (req, res) => {
  let date = new Date().toISOString();
  db("contacts")
    .where("id", req.params.id)
    .update(
      {
        name: req.body.name,
        address: req.body.address,
        mobile: req.body.mobile,
        work: req.body.work,
        home: req.body.home,
        twitter: req.body.twitter,
        instagram: req.body.instagram,
        github: req.body.github,
        updated_at: date
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

router.delete("/:id", (req, res) => {
  db("contacts")
    .where("id", req.params.id)
    .del()
    .returning("*")
    .then(results => {
      if (results.length === 0) {
        res.status(500).json({ message: "Contact not found" });
      } else {
        res.sendStatus(200);
      }
    })
    .catch(err => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
