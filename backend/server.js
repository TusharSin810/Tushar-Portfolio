import express from 'express'
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req,res) => {
    res.send("Hi from the server side");
});

app.listen(port, (req,res) => {
    console.log(`Port is Listening on Port ${port}`);
});