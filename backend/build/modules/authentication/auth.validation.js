"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var constant_1 = __importDefault(require("../../constant/constant"));
var authValidation = /** @class */ (function () {
    function authValidation() {
        this.signUpBody = [
            (0, express_validator_1.body)("name")
                .notEmpty()
                .withMessage(constant_1.default.NAME_ERROR),
            (0, express_validator_1.body)("age")
                .notEmpty()
                .withMessage(constant_1.default.AGE_ERROR),
            (0, express_validator_1.body)("email")
                .notEmpty()
                .withMessage(constant_1.default.EMAIL_ERROR),
            (0, express_validator_1.body)("password")
                .notEmpty()
                .withMessage(constant_1.default.PASSWORD_ERROR)
        ];
        this.loginBody = [
            (0, express_validator_1.body)("email")
                .notEmpty()
                .withMessage(constant_1.default.EMAIL_ERROR),
            (0, express_validator_1.body)("password")
                .notEmpty()
                .withMessage(constant_1.default.PASSWORD_ERROR)
        ];
    }
    return authValidation;
}());
exports.default = new authValidation();
