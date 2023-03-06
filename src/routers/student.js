const express = require('express');
const router  = new express.Router();
const Student = require("../models/students");

//      CREATING THE DATA FIELDS FOR NAME,EMAIL,PH,ADDRESS
router.post("/students", async (req, res) => {
    try {
      console.log(req.body);
      const user = new Student(req.body);
      // await
      const createUser = await user.save();
      res.status(201).send(createUser);
    } catch (e) {
      res.status(400).send(e);
    }
  });
  
  //      READ THE STUDENT DATA ALL AT ONCE DISPLAYING
  router.get("/students", async (req, res) => {
    try {
      const studentsData = await Student.find();
      res.send(studentsData);
    } catch (e) {
      res.send(e);
    }
  });
  
  //      FINDING THE STUDENT DATA BY IDS
  router.get("/students/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const studentDataId = await Student.find({ _id: id });
      // const studentData = await Student.findById(_id);
  
      if (!studentDataId) {
        return res.status(404).send();
      } else {
        console.log(studentDataId);
        res.send(studentDataId);
      }
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  
  //      DELETE STUDENT DATA(Delete)
  router.delete("/students/:id",async(req,res) =>{
      try{
          const id = req.params.id;
          const deleteStudent = await Student.findByIdAndDelete(id);
          if(!id){
              return res.status(404).send();
          }
          res.send(deleteStudent);
          console.log(deleteStudent);
      }catch(e){
          res.status(500).send(e);
      }
  })
  
  
  //      UPDATE BY IDS(Patch)
  router.patch("/students/:id",async(req,res) =>{
      try{
          const id = req.params.id;
          const updateStudent = await Student.findByIdAndUpdate(id,req.body,{
              new:true //displays the new data after updation
          });
          res.send(updateStudent);
      }catch(e){
          res.status(400).send(e);
          //res.send(updateStudent);
      }
  })
module.exports = router;