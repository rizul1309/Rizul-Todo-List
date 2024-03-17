import express from 'express';
import Connection from './database/db.js';
import cors from 'cors'
import route from './routes/route.js';
import bodyParser from 'body-parser';

const app = express();
const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
};
app.use(cors(corsOpts));
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',route)
const PORT=8000;
Connection();
app.listen(PORT,()=>console.log(`Your server is running successfully on PORT ${PORT} `))
