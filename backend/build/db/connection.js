"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = exports.Op = exports.QueryTypes = exports.DataTypes = exports.sequelize = void 0;
var sequelize_1 = require("sequelize");
Object.defineProperty(exports, "DataTypes", { enumerable: true, get: function () { return sequelize_1.DataTypes; } });
Object.defineProperty(exports, "QueryTypes", { enumerable: true, get: function () { return sequelize_1.QueryTypes; } });
Object.defineProperty(exports, "Op", { enumerable: true, get: function () { return sequelize_1.Op; } });
Object.defineProperty(exports, "Model", { enumerable: true, get: function () { return sequelize_1.Model; } });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var sequelize = new sequelize_1.Sequelize(process.env.DBNAME, process.env.USER_NAME, process.env.PASSWORD, {
    dialect: "mysql",
    host: process.env.HOST_NAME,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    logging: true,
    define: {
        timestamps: true,
        freezeTableName: true,
    },
    dialectOptions: {
        // useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true,
    },
    timezone: "+05:30",
});
exports.sequelize = sequelize;
sequelize.sync({ force: true }).then(function () {
    console.log('sync has been established successfully.');
})
    .catch(function (err) {
    console.error('Unable to connect to the database:', err);
});
sequelize.authenticate().then(function () {
    console.debug("".concat(process.env.DBNAME, " DB Connection has been established successfully."));
}).catch(function (error) {
    console.error("".concat(process.env.DBNAME, " DBUnable to connect to the database: ").concat(process.env.DBNAME), error);
});
