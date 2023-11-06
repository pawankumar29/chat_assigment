"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = require("../connection");
var User = connection_1.sequelize.define("user", {
    id: {
        type: connection_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: connection_1.DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: connection_1.DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: connection_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: connection_1.DataTypes.STRING,
        allowNull: false
    },
}, { timestamps: true });
exports.default = User;
