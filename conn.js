const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/newSrudent',{useFindAndModify:false,useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true})
.then(()=>{
    console.log('connection');
})
.catch((e)=>{
    console.log("error");
})


