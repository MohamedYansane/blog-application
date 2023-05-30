//let's start with the backend 
import express from 'express';
import dotenv from "dotenv";
import errorHandler from './middleware/articleMiddleware';
import bdConnection from './config/dbConnection';
dotenv.config();
//calling my db connexion
bdConnection();

// initialization
const app = express();
const port = process.env.PORT;
// creating a middleware
app.use(express.json());
app.use('/article', require("./routes/articleRoutes"));
app.use('/users', require("./routes/userRoutes"));
app.use(errorHandler);
app.listen(port, ()=>console.log('listening on port: '+port));









