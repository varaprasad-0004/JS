const express=require('express')
const app=express()
const mongoose = require("mongoose")
// const { Schema} = mongoose;
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mynewdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if (!err){
        console.log("Connected to db")
    }else{
        console.log("Error")
    }
})

app.listen(3000,()=>{
    console.log('on port 3000')
})

// const sch = new Schema({
//     name: String,
//     email: String,
//     id:Number,
// },{versionKey:false})

// const monmodel = mongoose.model("NEWCOL", sch);

// app.post("/post", async(req,res)=>{
//     console.log('Inside post function');

//         const data = new monmodel({
//             name: req.body.name,
//             email: req.body,email,
//             id: req.body.id
//         });
//         const val = data.save();
//         res.send('posted')
//     });


// app.post("/postinc",async(req,res)=>{
//     console.log("Inside post function");
//     counter.findOneAndUpdate(
//         {id:100},
//         {'$inc': {'seq':1}}
//         , {new:true},(error, c) => {
//             let seqId;
//             if (c==null)
//             {
//                 const newCounter = new counter({id: 100, seq: 1});
//                 newCounter.save()
//             }
//             else{
//                 seqId = c.seq
//             }
//             const data = new monmodel({
//                 name: req.body.name,
//                 email: req.body.email,
//                 id: seqId
//             });
//             const val = data.save();
//         });

//     req.send('posted');
// });

// app.put("/update/:id", async(req,res)=>{
//     let upid = req.params.id;
//     let
// })