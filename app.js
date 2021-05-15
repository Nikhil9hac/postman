const express=require('express');
const app=express();
require('./conn');
const port=process.env.PORT || 3000
const studentRouter=require('./studentRouter')

app.use(express.json())
app.use(studentRouter)
app.listen(port,()=>{
    console.log(`listening at port no ${port}`);
})