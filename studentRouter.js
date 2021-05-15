const express=require('express');
const Student=require('./backend');
const router=new express.Router();

router.post('/students',async(req,res)=>{
    try {
        const user=new Student(req.body);
        const studentData=await user.save();
        res.status(201).send(studentData)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/students',async(req,res)=>{
    try {
        const studentData=await Student.find();
        res.status(200).send(studentData);
    } catch (error) {
        res.status(400).send(studentData);
    }
})

router.patch('/students/:id',async(req,res)=>{
    try {
        const _id=req.params.id;
        const studentData=await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.status(201).send(studentData)
    } catch (error) {
        res.status(400).send(error)
        
    }
})

router.delete('/students/:id',async(req,res)=>{
    try {
        const _id=req.params.id;
        const studentData=await Student.findByIdAndDelete(_id);
        if (!req.params.id) {
            res.status(400).send()
        }
        else{
            res.status(201).send(studentData)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports=router;