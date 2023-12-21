const express=require('express');
const bodyParser=require('body-parser');
const db=require('mongoose');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(bodyParser.json());

db.connect("mongodb://localhost:27017/studs_db", {
    family: 4
});
db.connection.on('error',console.error.bind(console,"Error While Posting"));
db.connection.once('open',()=>{
    console.log("Database Connected Success");
});

const students=db.model('students',new db.Schema({
    name:String,
    age:Number,
    gender:String,
    section:String
}));

app.post('/post',async(req,res)=>{
    await new students (req.body).save();
    res.send("SUCCESSS");
});

app.get('/get', async (req, res) => {
     const allStudents = await students.find();
          res.json(allStudents);    
});

app.get ("/getbyid/:id",async(req,res)=>{
    const student=await students.findById(req.params.id);
    res.json(student);
});

app.put('/update/:name', async (req, res) => {
    const studentName = req.params.name;
    const { age, gender, section } = req.body;
    const updatedStudent = await students.findOneAndUpdate(
            { name: studentName },
            { $set: { age, gender, section } },
            { new: true }
        );
res.json(updatedStudent);
});

app.delete('/delete/:name', async (req, res) => {
    const studentName = req.params.name;
        const deletedStudent = await students.findOneAndDelete({ name: studentName });
        res.json(deletedStudent );
  
});

app.listen(4000);