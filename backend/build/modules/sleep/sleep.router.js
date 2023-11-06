"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var sleep_controller_1 = __importDefault(require("./sleep.controller"));
var sleep_validation_1 = __importDefault(require("./sleep.validation"));
var postvalidate_1 = __importDefault(require("../../middleware/postvalidate"));
var sleepRouter = express_1.default.Router();
sleepRouter.post("/record", sleep_validation_1.default.recordAddBody, postvalidate_1.default, sleep_controller_1.default.recordAdd);
sleepRouter.get("/getRecord/:id", sleep_controller_1.default.getRecord);
sleepRouter.post("/editRecord/:id", sleep_validation_1.default.editRecordBody, sleep_controller_1.default.editRecord);
sleepRouter.delete("/deleteRecord/:id", sleep_controller_1.default.deleteRecord);
sleepRouter.post("/decodeToken", sleep_validation_1.default.decodeJwtBody, postvalidate_1.default, sleep_controller_1.default.decodeToken);
exports.default = sleepRouter;
