"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_validator_1 = require("express-validator");
var constant_1 = __importDefault(require("../../constant/constant"));
var sleepValidation = /** @class */ (function () {
    function sleepValidation() {
        this.recordAddBody = [
            (0, express_validator_1.body)("wake_up_time")
                .notEmpty()
                .withMessage(constant_1.default.WAKE_TIME_ERROR),
            (0, express_validator_1.body)("sleep_time")
                .notEmpty()
                .withMessage(constant_1.default.SLEEP_TIME_ERROR),
            (0, express_validator_1.body)("total_time")
                .notEmpty()
                .withMessage(constant_1.default.TOTAL_TIME_ERROR),
        ];
        this.decodeJwtBody = [
            (0, express_validator_1.body)("token")
                .notEmpty()
                .withMessage(constant_1.default.TOKEN_ERROR),
        ];
        this.editRecordBody = [
            (0, express_validator_1.body)("wake_up_time")
                .notEmpty()
                .withMessage(constant_1.default.WAKE_TIME_ERROR),
            (0, express_validator_1.body)("sleep_time")
                .notEmpty()
                .withMessage(constant_1.default.SLEEP_TIME_ERROR),
            (0, express_validator_1.body)("total_time")
                .notEmpty()
                .withMessage(constant_1.default.TOTAL_TIME_ERROR),
        ];
    }
    return sleepValidation;
}());
exports.default = new sleepValidation();
