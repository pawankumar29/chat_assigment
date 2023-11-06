"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var message_model_1 = require("./models/message.model");
var participant_model_1 = require("./models/participant.model");
var room_model_1 = require("./models/room.model");
var user_model_1 = __importDefault(require("./models/user.model"));
user_model_1.default.hasMany(message_model_1.messages, { foreignKey: 'from' });
message_model_1.messages.belongsTo(user_model_1.default, { foreignKey: 'from' });
user_model_1.default.hasMany(message_model_1.messages, { foreignKey: 'to' });
message_model_1.messages.belongsTo(user_model_1.default, { foreignKey: 'to' });
user_model_1.default.hasMany(participant_model_1.participant, { foreignKey: 'userId' });
participant_model_1.participant.belongsTo(user_model_1.default, { foreignKey: 'userId' });
room_model_1.room.hasMany(participant_model_1.participant, { foreignKey: 'roomId' });
participant_model_1.participant.belongsTo(room_model_1.room, { foreignKey: 'roomId' });
room_model_1.room.hasMany(message_model_1.messages, { foreignKey: 'roomId' });
message_model_1.messages.belongsTo(room_model_1.room, { foreignKey: 'roomId' });
