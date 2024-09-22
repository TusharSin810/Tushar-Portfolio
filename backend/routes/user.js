import Router from 'express'
import {JWT_SECRET} from '../config.js'
import { UserModel } from '../db.js'
import jwt from "jsonwebtoken"
import {z} from "zod"
import bcrypt from 'bcrypt'

export const userRouter = Router();

userRouter.post("/signin", async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email
    })

    if(!user){
        res.status(403).json({
            message: "User Does not Exist Please signin"
        })
        return
    }

    const passMatch = await bcrypt.compare(password,user.password);
    

    if(passMatch){
        const token = jwt.sign({
            id:user._id.toString()
    },JWT_SECRET)
        res.json({
            token:token
        })
    }else{
        res.status(403).json({
            message:"Innorect Credentials"
        })
    }

});


userRouter.post("/signup", async (req,res) => {
    
    const requiredBody = z.object({
        email: z.string().email(),
        name: z.string(),
        password: z.string()
    })
    
    const parseSuccess = requiredBody.safeParse(req.body);
    
    if(!parseSuccess.success){
        res.json({
            error: parseSuccess.error.message,
        })
        return
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let errthrown = false;

    try{
        const hashpass = await bcrypt.hash(password,10);
        console.log(hashpass);

        await UserModel.create({
            email: email,
            password: hashpass,
            name: name
        })
    }catch(e){
        res.json({
            message:"User already Exists"
        })
        errthrown = true;
    }
    if(!errthrown){
        res.json({
            message:"You are logged In"
        })
    }
    

});
