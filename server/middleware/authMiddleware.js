import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import users from "../models/users";
export const validateToken = asyncHandler(async (req, res, next) => {
  // let create a variable called token
  let token;
  // next check which authorization  user got
  let auth = req.headers.authorization || req.headers.Authorization;
  if (auth && auth.startsWith("Bearer")) {
    // if it's case i'm gonna initialise my token variable
    // with it
    token = auth.split(" ")[1];
    // i'm splitting the value of my auth into array
    // the first one will contains Bearer and the next the token
    // next step check if the given token is correct or valid
    // by comparing it to my token in my env file
    try {
      const { _id } = jwt.verify(token, process.env.ACCESS_TOKEN);

      // if it's authorized then
      // the decoded contains the information of the user precisely the token

      console.log(`After decoded => _id:${_id} `);

      //j'ai remarque que j'ai un probleme pour la creation des post as admin
      //parceque j'affecte les infos du decoded token qui ne contiennent que name id
      //donc ça contient pas les autres info du coup je dois destruct
      req.user = await users.findById(_id).select("-password");
      console.log("the req.user");
      console.log(req.user);
      next();
    } catch (error) {
      res.status(401);
      throw new Error("The user is unauthorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("The user is not authorized");
  }
});

// i wanna check if the user is admin in order to be able to create a post
export const adminGuard = asyncHandler((req, res, next) => {
  if (req.user && req.user.admin) {
    next();
  } else {
    let error = new Error("The user is not authorized as an admin");
    res.status(401);

    next(error);
  }
});
