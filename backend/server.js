import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import {userRouter} from './routes/user.js'
import { MONGODB_URI,PORT } from './config.js'

const app = express();
const port = PORT;

app.use(cors());
app.use(express.json());

app.use('/user', userRouter)


async function main(){
    await mongoose.connect(MONGODB_URI)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Database connection error:', err));

    app.listen(port, (req,res) => {
    console.log(`Port is Listening on Port ${port}`);
    });
}
main();