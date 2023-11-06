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
exports.intializeSocketServer = void 0;
var socket_io_1 = require("socket.io");
var room_model_1 = require("../db/models/room.model");
var participant_model_1 = require("../db/models/participant.model");
var user_model_1 = __importDefault(require("../db/models/user.model"));
var message_model_1 = require("../db/models/message.model");
var intializeSocketServer = function (app) { return __awaiter(void 0, void 0, void 0, function () {
    var io;
    return __generator(this, function (_a) {
        io = new socket_io_1.Server(app, {
            cors: {
                origin: "http://localhost:3001",
                methods: ["GET", "POST"],
            },
        });
        io.on("connection", function (socket) {
            console.log("User Connected: ".concat(socket.id));
            socket.on("join_room", function (msg) { return __awaiter(void 0, void 0, void 0, function () {
                var userData, roomExist, roomData, roomCreate, participantDataToStore, participantData, participantExist, participantDataToStore, participantData, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("socketJoined===", msg);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 12, , 13]);
                            return [4 /*yield*/, user_model_1.default.findOne({ where: {
                                        email: msg.email
                                    } })];
                        case 2:
                            userData = _a.sent();
                            if (!userData) {
                                console.log("errorInFindUser====>no user Avalable ");
                                return [2 /*return*/];
                            }
                            msg.userId = userData.id;
                            return [4 /*yield*/, room_model_1.room.findOne({
                                    where: {
                                        name: msg.room
                                    }
                                })];
                        case 3:
                            roomExist = _a.sent();
                            console.log("msg===>", msg);
                            if (!!roomExist) return [3 /*break*/, 6];
                            roomData = {
                                name: msg.room,
                            };
                            return [4 /*yield*/, room_model_1.room.create(roomData)];
                        case 4:
                            roomCreate = _a.sent();
                            console.log("roomCreate===>", roomCreate);
                            participantDataToStore = {
                                userId: msg.userId,
                                roomId: roomCreate.id
                            };
                            return [4 /*yield*/, participant_model_1.participant.create(participantDataToStore)
                                // socket.emit('join', msg);   //for checking to webview 
                            ];
                        case 5:
                            participantData = _a.sent();
                            return [3 /*break*/, 11];
                        case 6: return [4 /*yield*/, participant_model_1.participant.findOne({
                                where: {
                                    userId: msg.userId,
                                    roomId: roomExist.id
                                }
                            })];
                        case 7:
                            participantExist = _a.sent();
                            if (!participantExist) return [3 /*break*/, 8];
                            console.log("user id ".concat(msg.userId, " exist already"));
                            return [3 /*break*/, 10];
                        case 8:
                            participantDataToStore = {
                                userId: msg.userId,
                                roomId: roomExist.id
                            };
                            return [4 /*yield*/, participant_model_1.participant.create(participantDataToStore)];
                        case 9:
                            participantData = _a.sent();
                            _a.label = 10;
                        case 10:
                            //  //code for testing 
                            //  socket.join(msg.room);
                            //  io.to(socket.id).emit('join', msg); // only while checking frontend for me 
                            //  //over
                            console.log("errorInJoin==room exist ALREADY");
                            _a.label = 11;
                        case 11:
                            socket.join(msg.room);
                            return [3 /*break*/, 13];
                        case 12:
                            error_1 = _a.sent();
                            console.log("errorInJoin-->", error_1);
                            return [3 /*break*/, 13];
                        case 13: return [2 /*return*/];
                    }
                });
            }); });
            socket.on("send_message", function (msg) { return __awaiter(void 0, void 0, void 0, function () {
                var roomExist, userData, userDataTo, checkParticipant, messageData, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("inside the send message ");
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 9, , 10]);
                            return [4 /*yield*/, room_model_1.room.findOne({
                                    where: {
                                        name: msg.room
                                    } // only while checking for frontend
                                })];
                        case 2:
                            roomExist = _a.sent();
                            msg.roomId = roomExist.id;
                            return [4 /*yield*/, user_model_1.default.findOne({ where: {
                                        email: msg.from
                                    } })];
                        case 3:
                            userData = _a.sent();
                            if (!userData) {
                                console.log("errorInFindFromUser====>no user Avalable ");
                                return [2 /*return*/];
                            }
                            return [4 /*yield*/, user_model_1.default.findOne({ where: {
                                        email: msg.to
                                    } })];
                        case 4:
                            userDataTo = _a.sent();
                            if (!userDataTo) {
                                console.log("errorInFindToUser====>no user Avalable ");
                                return [2 /*return*/];
                            }
                            msg.to = userDataTo.id;
                            msg.from = userData.id;
                            console.log("msg+++===>", msg);
                            return [4 /*yield*/, participant_model_1.participant.findOne({
                                    where: {
                                        roomId: msg.roomId,
                                        userId: msg.to
                                    }
                                })];
                        case 5:
                            checkParticipant = _a.sent();
                            if (!!checkParticipant) return [3 /*break*/, 7];
                            return [4 /*yield*/, participant_model_1.participant.create({ roomId: msg.room,
                                    userId: msg.to })];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7: return [4 /*yield*/, message_model_1.messages.create(msg)];
                        case 8:
                            messageData = _a.sent();
                            console.log("message", messageData);
                            socket.to(msg.room).emit("receive_message", msg);
                            return [2 /*return*/, messageData];
                        case 9:
                            error_2 = _a.sent();
                            console.log("errorInChat", error_2);
                            return [3 /*break*/, 10];
                        case 10: return [2 /*return*/];
                    }
                });
            }); });
        });
        return [2 /*return*/];
    });
}); };
exports.intializeSocketServer = intializeSocketServer;
