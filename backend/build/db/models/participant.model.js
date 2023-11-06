"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.participant = void 0;
var connection_1 = require("../connection");
var room_model_1 = require("./room.model");
var user_model_1 = __importDefault(require("./user.model"));
exports.participant = connection_1.sequelize.define('participant', {
    id: {
        type: connection_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: connection_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: user_model_1.default,
            key: 'id',
        }
    },
    roomId: {
        type: connection_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: room_model_1.room,
            key: 'id',
        }
    }
});
