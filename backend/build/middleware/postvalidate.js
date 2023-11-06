"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var constant_1 = __importDefault(require("../constant/constant"));
/**
 * Throw error if failed to validate
 * @param req
 * @param res
 * @param next
 */
var postValidate = function (req, res, next) {
    var error = (0, express_validator_1.validationResult)(req);
    var responseError = [];
    if (!error.isEmpty()) {
        for (var _i = 0, _a = error.array(); _i < _a.length; _i++) {
            var errorRow = _a[_i];
            console.log("errorRow===>", errorRow);
            responseError.push({ field: errorRow, message: errorRow.msg });
        }
        return res.status(constant_1.default.BAD_REQUEST).send({
            response: {
                status: 400,
                message: "Error!",
                error: true,
                data: responseError
            }
        });
    }
    else {
        next();
    }
};
exports.default = postValidate;
