"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resPong = void 0;
function resPong(req, res) {
    return res.json({
        message: 'pong',
    });
}
exports.resPong = resPong;
