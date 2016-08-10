"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require("./storage");
console.log("main 7");
var Point123 = (function () {
    function Point123(x, y) {
        this.x = x;
        this.y = y;
    }
    Point123.prototype.dump = function () {
        console.log(this.x + ", " + this.y);
    };
    return Point123;
}());
var PointEx = (function (_super) {
    __extends(PointEx, _super);
    function PointEx(x, y, z) {
        _super.call(this, x, y);
    }
    return PointEx;
}(Point123));
var pt = new Point123(5, 10);
//# sourceMappingURL=main.js.map