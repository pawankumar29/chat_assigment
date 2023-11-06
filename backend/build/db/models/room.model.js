"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.room = void 0;
var connection_1 = require("../connection");
exports.room = connection_1.sequelize.define('room', {
    id: {
        type: connection_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: connection_1.DataTypes.STRING,
        allowNull: false,
    },
});
