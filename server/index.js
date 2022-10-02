import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
const app=express(); 


import postRoutes from './routes/posts.js';



app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);//line should be after cors

const CONNECTION_URL="mongodb+srv://kanishkaverma:kanishkaverma123@cluster0.rwglg.mongodb.net/?retryWrites=true&w=majority";
//mongo atlas
const PORT = process.env.PORT|| 5000; // heroku gives it any port

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
// second arg can be skipped but may cause error so just be it
// if connected successfully then if not catch
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))//promise return by mongoose.connect
  .catch((error) => console.log(`${error} did not connect`));//console.log(error.message);

//mongoose.set('useFindAndModify', false); // to nullify some errors