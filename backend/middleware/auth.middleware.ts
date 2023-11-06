
import express from "express"
import { verifyToken } from "../modules/sleep/sleep.helper";
import constant from "../constant/constant";

async function validateToken(
    request: express.Request |any ,
    response: express.Response,
    next: express.NextFunction
  ) {
    try {
      const token = request.headers["token"] as string;
        console.log("token===>",token);
     const decoded:any= await verifyToken(token);
console.log("decoded===>",decoded);
     if(decoded.status){
        request.userData=decoded 
        next();
     }
     else
     throw {
        error:constant.JWT_ERROR,
        MESSAGE:constant.PROVIDE_TOKEN

     }
      
    } catch (error:any) {
      console.log(`ERROR::`, error);
      const errorMessage = error.message || error;

        return response.json({ status: 0, Error: errorMessage })
    }
  }
  
  export default validateToken;