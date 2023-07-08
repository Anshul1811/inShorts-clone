import express from 'express'

const route=express.Router();
import News from '../models/news-schema.js';

route.get('/news',async (req,res)=>{
    try {
        let data=await News.find({});
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

export default route;