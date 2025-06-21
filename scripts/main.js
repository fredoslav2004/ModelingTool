var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "jquery", "./definitions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderAll = renderAll;
    const jquery_1 = __importDefault(require("jquery"));
    const definitions_1 = require("./definitions");
    let canvas;
    let ctx;
    const objects = [
        new definitions_1.Square(60, 60, 80), // initial demo entity
    ];
    jQuery(() => {
        canvas = (0, jquery_1.default)("#mainCanvas")[0];
        ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        renderAll();
    });
    function renderAll() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (const o of objects)
            o.render(ctx);
    }
});
//# sourceMappingURL=main.js.map