import express from "express";
import sleepController from "./sleep.controller";
import sleepValidation from "./sleep.validation";
import postValidate from "../../middleware/postvalidate";

const sleepRouter = express.Router();
sleepRouter.post("/record", sleepValidation.recordAddBody, postValidate, sleepController.recordAdd);
sleepRouter.get("/getRecord/:id", sleepController.getRecord);
sleepRouter.post("/editRecord/:id", sleepValidation.editRecordBody,sleepController.editRecord);
sleepRouter.delete("/deleteRecord/:id", sleepController.deleteRecord);
sleepRouter.post("/decodeToken", sleepValidation.decodeJwtBody, postValidate, sleepController.decodeToken);
sleepRouter.get("/getLatestRecord/:id", sleepController.getLatestRecord);






export default sleepRouter;