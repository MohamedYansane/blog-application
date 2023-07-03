// let's start with the backend
import express from 'express';
import dotenv from "dotenv";
import {errorHandler, invalidApiPathHandler} from './middleware/errorHandler';
import bdConnection from './config/dbConnection';
// importation of routes
import usersRoutes from "./routes/usersRoutes";
dotenv.config();
// calling my db connexion
bdConnection();

// initialization
const app = express();
const port = process.env.PORT;


// creating a middleware
app.use(express.json());
app.use('/api/article', require("./routes/articleRoutes"));
app.use('/api/user', require("./routes/userRoutes"));
app.use('/api/users', usersRoutes);
// error handler api
app.use(invalidApiPathHandler);
app.use(errorHandler);
app.listen(port, () => console.log('listening on port: ' + port));
