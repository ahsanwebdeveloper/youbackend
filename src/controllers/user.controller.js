import { asyncHendler } from "../utils/anyscHandler.js";

const registeruser = asyncHendler(async (req, res) => {
    //get user detail from frontend
    //validation -not empty
    //check if user already exists: username, email
    //check for image ,check for avatar
    //upload them to cloudinary, avatar
    //create user object -create entery in db
    //remove password and refresh token field from response 
    //check for user creation 
    // return response
    const {fullname,email,username,password}=req.body
    console.log("email:",email)
});

export { registeruser };
