import jwt from "jsonwebtoken"
import * as dotenv from 'dotenv'

dotenv.config({path:'../.env'});

export const JWT_SECRET = process.env.JWT_SECRET;

function auth(req, res, next) {
    const token = req.headers.authorization;

    const response = jwt.verify(token, JWT_SECRET);

    if (response) {
        req.userId = response.id;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

export default {auth};