import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import student from './Models/student';
import course from './Models/course';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://buddanavaraprasad:MVdDKXcTAc5IMdH4@cluster0.ci86jca.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(3002, () => {
    console.log("Connected to Database & Listening to localhost 3002");
});

app.post('/addstudent', (req, res) => {
  console.log(req.body.formdata);
  const { name, rollno, college, branch } = req.body.formdata;
  const stud = new student({
      name,
      rollno,
      college,
      branch
  });
  try{
      stud.save()
  }catch(err){
      console.log(err)
  }
  return res.send({msg:"inserted",result:stud})
});

app.delete('/deletestudent/:id', (req, res) => {
  const studentId = req.params.id;
  student.findByIdAndRemove(studentId)
    .then(() => {
      res.send({ message: 'Student deleted successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error while deleting student data' });
    });
});

app.get('/getstudents',async(req,res,next)=>{
  let studentdata;
  try{
      studentdata=await student.find();
  }catch(err){
      console.log(err);
  }

  if(!studentdata){
      return res.status(404).json({message:"No students found"})
  }
  return res.status(200).json({studentdata})
})

app.put('/updatestudent/:id', async (req, res, next) => {
  const _id = req.params.id;
  const { name, rollno, college, branch } = req.body;

  let stud;
  try {
    stud = await student.findByIdAndUpdate(_id, { name, rollno, college, branch });
  } catch (err) {
    console.log(err);
  }

  return res.send({ msg: "Updated", result: stud });
});

app.get('/getstudentbyid/:id', async (req, res, next) => {
  const _id = req.params.id;

  try {
    const studentdata = await student.findById(_id);
    console.log(studentdata);
    if (!studentdata) {
      console.log('No students found');
      return res.status(404).json({ message: 'No students found' });
    }
    return res.status(200).json({ studentdata });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error while retrieving student data' });
  }
});

app.put('/updatestudent/:id', async(req,res,next)=>{
  const _id=req.params.id
  const {name,rollno,college,branch}=req.body
  let stud
  try{
      stud= await student.findByIdAndUpdate(_id,{name,rollno,college,branch});
  }catch(err){
      console.log(err)
  }
  return res.send({msg:"inserted",result:stud})
  
})

app.post('/addcourse', (req, res) => {
    console.log(req.body.coursedata);
    const { name, dready } = req.body.coursedata;
    const stud = new course({
        name,
        dready
    });
    try{
        stud.save()
    }catch(err){
        console.log(err)
    }
    return res.send({msg:"inserted",result:stud})
});

app.delete('/deletecourse/:id', (req, res) => {
  const courseId = req.params.id;
  course.findByIdAndRemove(courseId)
    .then(() => {
      res.send({ message: 'Course deleted successfully' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'Error while deleting course data' });
    });
});

app.get('/getcourses',async(req,res,next)=>{
  let coursedata;
  try{
      coursedata=await course.find();
  }catch(err){
      console.log(err);
  }

  if(!coursedata){
      return res.status(404).json({message:"No courses found"})
  }
  return res.status(200).json({coursedata})
})

app.put('/updatecourse/:id', async (req, res, next) => {
  const _id = req.params.id;
  const { name, dready } = req.body;

  let stud;
  try {
    stud = await course.findByIdAndUpdate(_id, { name, dready });
  } catch (err) {
    console.log(err);
  }

  return res.send({ msg: "Updated", result: stud });
});

app.get('/getcoursebyid/:id', async (req, res, next) => {
  const _id = req.params.id;

  try {
    const coursedata = await course.findById(_id);
    console.log(coursedata);
    if (!coursedata) {
      console.log('No courses found');
      return res.status(404).json({ message: 'No courses found' });
    }
    return res.status(200).json({ coursedata });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Error while retrieving course data' });
  }
});

app.put('/updatecourse/:id', async (req, res, next) => {
  const _id = req.params.id;
  const { name, dready } = req.body;

  let stud;
  try {
    stud = await course.findByIdAndUpdate(_id, { name, dready });
  } catch (err) {
    console.log(err);
  }

  return res.send({ msg: "Updated", result: stud });
});

app.use('/', (req, res, next) => {
    res.send('Hi, Mike');
});