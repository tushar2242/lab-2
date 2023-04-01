import mongoose from "mongoose";
const mongoschemas = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    id:{
        type:Number,
        required:true
    }
})
const groupBy = mongoose.model('db',mongoschemas)
export default groupBy