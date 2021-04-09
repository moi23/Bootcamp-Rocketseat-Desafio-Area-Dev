"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointmentRouter = express_1.Router();
appointmentRouter.post('/', function (request, response) {
    return response.json({
        message: 'Hello World',
    });
});
exports.default = appointmentRouter;
