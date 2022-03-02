const bcrypt=require("bcrypt");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const path=require('path');
const cors=require('cors');
express=require("express");
app=express();


const PORT= 5500;
app.use(cors());
const server="127.0.0.1:27017";
const db_name="school_mgt";
let Users=[];

mongoose.connect(`mongodb://${server}/${db_name}`)
.then(()=>{
    console.log("Connected to database")})
.catch(err=>{
    console.error(`Erro: ${err}`)});
    
const modelSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})
const myModel=mongoose.model("userModel",modelSchema);

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get("/users",(req,res)=>{
   myModel.find({})
   .then(result=>{
       res.send(result)
   })
   .catch(err=>{
       console.log(err)
   });
})
    
app.get("/",(req,res)=>{
    
    res.send("Hello welcome to the backend!")
})
app.get("/signup",(req,res)=>{
    res.sendFile(path.join(__dirname+"/public",'form.html'));
})
app.post("/signup",urlencodedParser,async(req,res)=>{
    //retrive user data
   if(Object.keys(req.body.username).length==0 || Object.keys(req.body.password).length==0){
       res.end("fill form");
   } 
   else{
    let user=new myModel(req.body); 
    let salt=await bcrypt.genSalt(10);
    user.password=await bcrypt.hash(user.password,salt);

    console.log(`signed up ${JSON.stringify(user)}`)
    user.save().
    then(result=>{
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })
    res.redirect("signup");
   }
});

app.post("/login",urlencodedParser,async(req,res)=>{

    let username=req.body.username;
    let password=req.body.password;
    const user=await myModel.findOne({username});
    if(user){
        const validPassword=await bcrypt.compare(password,user.password)
        if(validPassword){
            res.status(200).send(`Welcome ${user.username}`)
        }
        else{
            res.status(400).send("Wrong credentials")
        }
    }
   
})


app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})