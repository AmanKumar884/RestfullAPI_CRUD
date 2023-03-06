const { request } = require("express");
const express = require("express");
require("./db/conn");
const studentRouter = require("./routers/student");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use(studentRouter);

//setting up the root folder
app.get("/", (req, res) => {
  res.send("Hello to the Home page!");
});



app.listen(port, () => {
  console.log(`Connecting to the port no ${port} ...`);
});






// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);

//   user
//     .save()
//     .then(() => {
//       res.status(201).send(user);
//     })
//     .catch((e) => {
//       res.status(400).send(e);
//     });

//   res.send("Hello to the Student Site!!");
// });