import * as dotenv from 'dotenv'

dotenv.config({path:'../.env'});

const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT
const JWT_SECRET = process.env.JWT_SECRET

export {
   MONGODB_URI,
   PORT,
   JWT_SECRET
}