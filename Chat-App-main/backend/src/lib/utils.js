import jwt from "jsonwebtoken";
/* eslint-env node */ 
export const generateToken = (userId, res)=>{
    const token = jwt.sign({userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        httpOnly: false,
        secure:true,
        sameSite: "None",
        path:"/",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    })
    return token;
}