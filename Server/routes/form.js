const Form = require("../models/form");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const axios = require("axios");

router.post("/user/form", async (req, res) => {
  const form = new Form(req.body);
  try {
    let formData = await form.save();

    axios
      .post("https://placementorapiii.herokuapp.com/", {
        _10th: formData.secondary,
        _12th: formData.higher_secondary,
        medium: formData.medium,
        year: formData.year,
        backlog: formData.backlog,
        aggregate: formData.aggregate,
        sem1: formData.sem1 != null ? formData.sem1 : 0,
        sem2: formData.sem2 != null ? formData.sem2 : 0,
        sem3: formData.sem3 != null ? formData.sem3 : 0,
        sem4: formData.sem4 != null ? formData.sem4 : 0,
        sem5: formData.sem5 != null ? formData.sem5 : 0,
        sem6: formData.sem6 != null ? formData.sem6 : 0,
        sem7: formData.sem7 != null ? formData.sem7 : 0,
        sem8: formData.sem8 != null ? formData.sem8 : 0,
        skills: formData.additional_skills,
      })
      .then((result) => {
        res.status(201).send(result.data);
      })
      .catch((e) => {
        res.status(500).send(e);
      });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
