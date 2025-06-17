import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const student=mongoose.model("studentData",UserSchema)
export default student