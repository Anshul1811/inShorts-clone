import express from 'express'
import Connection from './database/db.js';
import DefaultData from './dafault.js';
import Route from './Routes/route.js'
import cors from 'cors'
import dotenv from 'dotenv'


const app=express();

app.use(cors());
app.use('/',Route);

//  if(process.env.NODE_ENV==='production'){
//     app.use(express.static('client/build'));
//  }


dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
const URL= process.env.MONGODB_URI || `mongodb+srv://${username}:${password}@cluster0.faztkzn.mongodb.net/?retryWrites=true&w=majority`;


const PORT= process.env.PORT || 8000;
Connection(URL);

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

DefaultData();