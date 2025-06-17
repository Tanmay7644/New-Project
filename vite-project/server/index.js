import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import student from "./models/User.js"
const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

mongoose.connect("mongodb://localhost:27017/User")

app.post('/register',(req,res)=>{
    student.create(req.body)
    .then(res.send("Data inserted"))
    .catch(err=>console.log(err))
})

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    student.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("Password is Incorrect!");
            }
        }
        else{
            res.json("No Record Existed!");
        }
    })
    
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
