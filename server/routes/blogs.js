const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

router.get("/", (req, res) => {
  Blog
    .find()
    .then(blogs => {
      res.status(200).json(blogs);
    })
    .catch(err => console.log(err))
});

router.get("/featured", (req, res) => {
  Blog
    .where("featured", true)
    .then(featured => {
      res.status(200).json(featured);
    })
    .catch(err => console.log(err))
});

router.get("/:id", (req, res) => {
  Blog
    .findById(req.params.id)
    .then((blog) => {
      if(!blog) {
       res.status(404).send();
      } else {
        res.status(200).json(blog);
      }
    })
    .catch(err => console.log(err))
});

router.post("/", (req, res) => {
  let blog = new Blog(req.body);
  blog
    .save()
    .then(blogPost => {
      res.status(201).json(blogPost)
    })
    .catch(err => console.log(err))
});

router.put("/:id", (req, res) => {
  Blog
    .findByIdAndUpdate(req.params.id, req.body)
    .then(blog => {
      res.status(204).json(blog);
    }) 
    .catch(err => console.log(err))
});

router.delete("/:id", (req, res) => {
  Blog
    .findByIdAndRemove(req.params.id, () => res.json("Blog Deleted"))
    .catch(err => console.log(err))
});


module.exports = router;
