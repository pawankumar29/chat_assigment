"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_validation_1 = __importDefault(require("./auth.validation"));
var postvalidate_1 = __importDefault(require("../../middleware/postvalidate"));
var auth_controller_1 = __importDefault(require("./auth.controller"));
var authRouter = express_1.default.Router();
authRouter.post("/signUp", auth_validation_1.default.signUpBody, postvalidate_1.default, auth_controller_1.default.signUp);
authRouter.post("/login", auth_validation_1.default.loginBody, postvalidate_1.default, auth_controller_1.default.Login);
exports.default = authRouter;
