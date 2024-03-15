import { error } from "console";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const Connection = () => {
    const MONGODB_URI = `mongodb+srv://${username}:${password}@rizul.cekouyw.mongodb.net/?retryWrites=true&w=majority&appName=Rizul`
    mongoose.connect(MONGODB_URI, { 
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology:true
      })
    mongoose.connection.on('connected',()=>{
        console.log('Database connected successfully')
    })
    mongoose.connection.on('disconnected',()=>{
        console.log('Database connected successfully')
    })
    mongoose.connection.on('error',()=>{
        console.log('Error while connecting with Database',error.message)
    })
}
export default Connection;