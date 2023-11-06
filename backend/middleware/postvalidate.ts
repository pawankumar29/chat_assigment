import * as express from "express";
import { validationResult } from "express-validator";
import constant from "../constant/constant";
/**
 * Throw error if failed to validate
 * @param req 
 * @param res 
 * @param next 
 */
const postValidate = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const error = validationResult(req);
  const responseError: Array<object> = [];

  if (!error.isEmpty()) {
    for (const errorRow of error.array()) {

        console.log("errorRow===>",errorRow);
      responseError.push({ field: errorRow, message: errorRow.msg })
    }
    return res.status(constant.BAD_REQUEST).send(
      {
        response: {
          status: 400,
          message: "Error!",
          error: true,
          data: responseError
        }
      });

  } else {
    next();
  }
};

export default postValidate;
