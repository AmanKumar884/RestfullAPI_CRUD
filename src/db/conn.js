const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/student_api").
then(() =>{
    console.log("connection is established!!");
}).catch((e)=>{
    console.log(e);
})

