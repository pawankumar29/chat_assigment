"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sleep_helper_1 = require("./sleep.helper");
var record_model_1 = require("../../db/models/record.model");
var constant_1 = __importDefault(require("../../constant/constant"));
var sleepController = /** @class */ (function () {
    function sleepController() {
        var _this = this;
        this.recordAdd = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var dataToAdd, error_1, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, record_model_1.record.create(req.body)];
                    case 1:
                        dataToAdd = _a.sent();
                        res.json({
                            status: 1, message: "successful", dataToAdd: dataToAdd
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        errorMessage = error_1.message || error_1;
                        res.json({ status: 0, Error: errorMessage });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getRecord = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userId, data, error_2, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userId = req.params.id;
                        console.log("userId===>", userId);
                        return [4 /*yield*/, record_model_1.record.findAll({ where: { userId: userId } })];
                    case 1:
                        data = _a.sent();
                        res.json({
                            status: 1, message: "successful", data: data
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        errorMessage = error_2.message || error_2;
                        res.json({ status: 0, Error: errorMessage });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.editRecord = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userId, data, error_3, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userId = req.params.id;
                        console.log("userId::", userId);
                        return [4 /*yield*/, record_model_1.record.update(req.body, { where: { id: userId } })];
                    case 1:
                        data = _a.sent();
                        if (data[0])
                            res.json({
                                status: 1, message: "successful", data: data
                            });
                        else
                            throw { message: constant_1.default.WRONG_DATA };
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        errorMessage = error_3.message || error_3;
                        res.json({ status: 0, Error: errorMessage });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.deleteRecord = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var userId, data, error_4, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        userId = req.params.id;
                        console.log("userId", userId);
                        return [4 /*yield*/, record_model_1.record.destroy({ where: { id: userId } })];
                    case 1:
                        data = _a.sent();
                        if (data[0])
                            res.json({
                                status: 1, message: "successful", data: data
                            });
                        else
                            throw { message: constant_1.default.WRONG_DATA };
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        errorMessage = error_4.message || error_4;
                        res.json({ status: 0, Error: errorMessage });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.decodeToken = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var token, data, error_5, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        token = req.body.token;
                        return [4 /*yield*/, (0, sleep_helper_1.verifyToken)(token)];
                    case 1:
                        data = _a.sent();
                        if (data) {
                            res.json({ status: 1, data: data });
                        }
                        else
                            throw { message: constant_1.default.WRONG_DATA, data: null };
                        return [3 /*break*/, 3];
                    case 2:
                        error_5 = _a.sent();
                        errorMessage = error_5.message || error_5;
                        res.json({ status: 0, Error: errorMessage });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
    }
    return sleepController;
}());
var object = new sleepController();
exports.default = object;
