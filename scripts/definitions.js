(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Square = exports.CommonObject = void 0;
    class CommonObject {
        x;
        y;
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }
    }
    exports.CommonObject = CommonObject;
    /* demo concrete shape -------------------------------------------------- */
    class Square extends CommonObject {
        size;
        color;
        constructor(x, y, size = 40, color = "#ff3232") {
            super(x, y);
            this.size = size;
            this.color = color;
        }
        render(ctx) {
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    }
    exports.Square = Square;
});
//# sourceMappingURL=definitions.js.map