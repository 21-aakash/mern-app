import express from 'express';
const app = express();

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoute from '../routes/users.js'
import auth from '../routes/auth.js'
import postRoute from '../routes/post.js'
import cors from 'cors';


dotenv.config();
mongoose.connect(process.env.MONGO_URL);
console.log("mongo connected!")


//middleware
app.use(cors());
app.use(express.json())
app.use(helmet());
app.use(morgan('common'));
app.use('/api/users', userRoute);
app.use('/api/auth', auth);
app.use('/api/posts', postRoute);

 
app.get('/',(req, res)=>{
   res.send("welcome....");
})




const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
