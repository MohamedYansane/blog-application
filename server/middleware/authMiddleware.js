import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
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
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("The user is unauthorized");
      }
      // dans req.user je stock lobject user dans decoded
      req.user = decoded;
      // next is the middleware that will intercepte my request to decode the token
      next();
      // if it's authorized then
      // the decoded contains the information of the user
      console.log("the decoded");
      console.log(decoded);
      console.log("the req.user");
      console.log(req.user);
    });
  }
  if (!token) {
    res.status(401);
    throw new Error("The user is not authorized");
  }
});
