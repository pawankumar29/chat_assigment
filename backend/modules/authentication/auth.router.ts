import express from "express";
import authValidation from "./auth.validation";
import postValidate from "../../middleware/postvalidate";
import authController from "./auth.controller";
const authRouter=express.Router();


authRouter.post("/signUp", authValidation.signUpBody,postValidate,authController.signUp);
authRouter.post("/login",authValidation.loginBody,postValidate,authController.Login);

export default authRouter;