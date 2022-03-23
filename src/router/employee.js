const express = require('express');
const router = express.Router();
const employeeUser = require('../models/employee')

router.post("/create", async (req, res) => {
  try {
    const user = new employeeUser(req.body);
    console.log(req.body);
    const insertUser = await user.save();
    res.status(201).send(insertUser);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.get("/read/:id", async (req, res) => {
  try {
    const userid = req.params.id
    const userlist = await employeeUser.findById(userid);
    res.send(userlist)
  } catch (e) {
    res.status(400).send(e);
  }
})
router.patch('/update/:id', async (req, res) => {
  try {
    //   const userid = 
    const userlist = await employeeUser.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.send(userlist);
  } catch (e) {
    res.status(400).send(e);
  }
})

router.put('/updateall/:id', async (req, res) => {
  try {
    //   const userid = 
    const userlist = await employeeUser.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.send(userlist);
  } catch (e) {
    res.status(400).send(e);
    console.log(res.status(400).send(e));
  }
})
router.delete('/delete/:id', async (req, res) => {
  try {
    const userlist = await employeeUser.findByIdAndDelete(req.params.id)
    res.status(201).send({ message: "deleted!!" });
  } catch (e) {
    res.status(400).send(e);
  }
})
module.exports = router;