"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var sleep_router_1 = __importDefault(require("./modules/sleep/sleep.router"));
var cors_1 = __importDefault(require("cors"));
var http_1 = __importDefault(require("http"));
require("./db/association");
var chatServer_1 = require("./socket/chatServer");
var auth_router_1 = __importDefault(require("./modules/authentication/auth.router"));
var auth_middleware_1 = __importDefault(require("./middleware/auth.middleware"));
dotenv_1.default.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use("/v1", auth_router_1.default);
app.use("*", auth_middleware_1.default);
app.use("/v1", sleep_router_1.default);
var server = http_1.default.createServer(app);
(0, chatServer_1.intializeSocketServer)(server); //initialize socket server 
server.listen(5166, function () {
    console.log("app is listening at 5166");
});
//docker-compose build sleep_task && docker-compose up -d sleep_task && docker logs -f sleep_task --tail 20
//123
