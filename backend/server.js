import express from 'express'
import cors from 'cors'

const app = express();
const port = 3000;

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

app.listen(port, (req,res) => {
    console.log(`Port is Listening on Port ${port}`);
});