import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';

const app = express();
const Router = express.Router();
app.use(cors());
app.use(bodyparser.json());


mongoose.connect('mongodb://localhost:27017/surveyResponse',{ useNewUrlParser: true });
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log('connection to MongoDb established Successfully');
});
app.use('/',Router);
app.listen(4000,()=>console.log("Serve running on port 4000"));
