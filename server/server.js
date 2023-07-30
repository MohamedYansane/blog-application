// let's start with the backend
import express from "express";
import dotenv from "dotenv";
import { errorHandler, invalidApiPathHandler } from "./middleware/errorHandler";
import bdConnection from "./config/dbConnection";
import cors from "cors";
import path from "path";

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
app.use(cors());
/**starting point of our server connexion */
/** create a package json file by typing npm init -y */
/** 1- we gonna install body-parser it will enable us to send post request and
 *  then cors (Cross-Origin Resource Sharing) CORS permet de définir des règles
 *  pour contrôler l'accès aux ressources d'un site web depuis un autre site web.
 *  Il est souvent utilisé pour permettre à des sites web tiers d'accéder aux API (interfaces de programmation d'application) d'un site web.
 *  and express as a framework for the routing of our application and then
 * 2- mongoose to create models for our post and nodemon so
 * that we don't have to restart manually our server it will take care of that.
 * for that we gotta go to our script file and then go to
 * the script object and write "start" : "nodemon index.js"
 * npm install body-parser cors express mongoose nodemon
 *
 * before usin import express we've to add type:module in our package.json file
 * otherwose we gonna use const express = require('express') we don't want that*/
//configuring our body parse so that we can send requst
/*app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));*/
//static assets to allow backend to reach our image folder
// for browser __dirname__ is an environment variable that give us the absolute path
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("/api/article", require("./routes/articleRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/users", usersRoutes);
// error handler api
app.use(invalidApiPathHandler);
app.use(errorHandler);
app.listen(port, () => console.log("listening on port: " + port));
