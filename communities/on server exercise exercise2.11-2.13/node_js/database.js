import mongoose from "mongoose";
mongoose.set("strictQuery", false)
const con = async()=>{
    const connect = await mongoose.connect("mongodb+srv://sahiljoya11:sahil1122@cluster0.syubkoh.mongodb.net/Communities")
    console.log("host--",connect.connection.host);
}
export default con