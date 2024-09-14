import express from 'express'
import cors from 'cors'
import {dirname} from "path"
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const users = [];

app.use(cors());
app.use(express.json());

app.post('/login', (req,res) => {
    const username = req.body.username
    const password = req.body.password
    
    users.push({
        username: username,
        password: password
    });
    res.json({
        mssage:"You are loged in"
})
    console.log(users);
});

app.get("/login",(req,res) => {
    res.send(__dirname+"/index.html")
})


app.listen(port, (req,res) => {
    console.log(`Port is Listening on Port ${port}`);
});