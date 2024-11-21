const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const zod = require("zod");
const jwtPassword = "secret";
const emailSchema = zod.email();
const passwordSchema = zod.string().min(6);

function signJWT(username, password){
    const userResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if (!userResponse.success){
        return null;
    }
    if (!passwordResponse.success){
        return null;
    }
    const signature = jwt.sign({username}, jwtPassword);
    return signtaure;   
}   

//Decoding doesnt need a secret password
function decodeJWT(jwtToken){
    if (jwt.decode(jwtToken)){
        return true;
    }else{
        return false;
    }
}

function verifyJWT(jwtToken){
    let ans = true;
    try{
        jwt.verify(jwtToken, jwtPassword);
    }catch(e){
        ans = false;
    }
    return ans;
}