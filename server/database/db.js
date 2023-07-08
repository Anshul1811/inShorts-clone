import mongoose from "mongoose";

const Connection=async (URL)=>{
    
    try {
        await mongoose.connect(URL,{useNewUrlParser:true})
        console.log('db connected succesfully');
    } catch (error) {
        console.log('error while connecting to database',error);
    }
}

export default Connection;