import mongoose from "mongoose";


const newsSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true,
        unique:true
    },
    timestamp:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    }
});

const News=mongoose.model('news',newsSchema)

export default News;