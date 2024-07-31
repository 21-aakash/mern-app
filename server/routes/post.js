import express from "express";
const router = express.Router();

import User from "../models/Users.js";
import Post from "../models/Post.js";
import multer from 'multer';
import path from 'path';


//create a post

router.post("/", async (req, res) => {
  const newPost = Post(req.body);

  try {
    const savedpost = await newPost.save();
    res.status(200).json(savedpost);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update a  post

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("the post has been updated");
    } else {
      res.status(403).json("you can update only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete a post

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("the post has been deleted");
    } else {
      res.status(403).json("you can delete only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//like -dislike a post

router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("The post has been liked");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("The post has been disliked");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get a post


router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
//get all posts

// Get all posts for a specific user
router.get("/user/:userId", async (req, res) => {
  try {
    const posts = await Post.find({ userId: req.params.userId }); // Fetch posts by userId
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});










// Route to fetch all posts for a specific user
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await Post.find({ userId }).populate('userId', 'username'); // Populate the author's username if needed
   
    
    res.status(200).json(posts);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
