"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuard = void 0;
var passport_1 = require("@nestjs/passport");
var JwtGuard = (function (_super) {
    __extends(JwtGuard, _super);
    function JwtGuard() {
        return _super.call(this) || this;
    }
    return JwtGuard;
}((0, passport_1.AuthGuard)('jwt')));
exports.JwtGuard = JwtGuard;
//# sourceMappingURL=jwt.guard.js.map