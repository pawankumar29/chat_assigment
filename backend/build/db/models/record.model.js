"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.record = void 0;
var connection_1 = require("../connection");
exports.record = connection_1.sequelize.define("record", {
    wake_up_time: {
        type: connection_1.DataTypes.STRING,
        allowNull: false
    },
    sleep_time: {
        type: connection_1.DataTypes.STRING,
        allowNull: false
    },
    total_time: {
        type: connection_1.DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: connection_1.DataTypes.INTEGER,
        allowNull: false,
    }
}, { timestamps: true });
// export default record;
