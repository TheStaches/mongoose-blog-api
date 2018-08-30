const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/", (req, res) => {
  User
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => console.log(err))
});

router.get("/:id", (req, res) => {
  User
    .findById(req.params.id)
    .then(user => {
      if(!user) {
        res.status(404).send()
      } else {
        res.status(200).json(user)
      };
    })
    .catch(err => console.log(err))
});

router.post("/", (req, res) => {
  let user = new User(req.body);
  user
    .save()
    .then(userPost => {
      res.status(201).json(userPost)
    })
    .catch(err => console.log(err))
});

router.put("/:id", (req, res) => {
  User
    .findByIdAndUpdate(req.params.id, req.body)
    .then(user => {
      res.status(204).json(user);
    })
    .catch(err => console.log(err))
});

router.delete("/:id", (req, res) => {
  User
    .findByIdAndRemove(req.params.id, () => res.json("User Deleted"))
    .catch(err => console.log(err))
});


module.exports = router;
