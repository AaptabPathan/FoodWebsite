require("dotenv").config();

const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",

  [
    body("email", "Invalid Email").isEmail(),
    body("name", "Invalid name").isLength({ min: 5 }),
    body("password", "Invalid password").isLength({ min: 5 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        location: req.body.location,
        password: secPassword,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  [
    body("email", "Invalid Email").isEmail(),
    body("password", "Invalid password").isLength({ min: 5 }),
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const email = req.body.email;
    const password = req.body.password;
    try {
      const userData = await User.findOne({ email });
      if (!userData) {
        return res.status(400).json({ errors: "Invalid credentials" });
      }

      const matchedPassword = await bcrypt.compare(
        req.body.password,
        userData.password
      );

      if (!matchedPassword) {
        return res.status(400).json({ errors: "Invalid credentials" });
      }

      //payload (database data) for sign method
      const data = {
        user: {
          id: userData.id,
        },
      };

      const authToken = jwt.sign(data, process.env.SECRET_KEY);
      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
