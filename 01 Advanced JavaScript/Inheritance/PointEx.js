var PointEx = (function() {
    "use strict";

    function PointEx(x, y, z) {
        Point.call(this, x, y);

        this.z = z;
    }

    PointEx.prototype = Object.create(Point.prototype);
    PointEx.prototype.constructor = PointEx;

    PointEx.prototype.dump = function() {
        Point.prototype.dump.call(this);

        console.log("Z = " + this.z);
        //console.log(this.x + ", " + this.y + ", " + this.z);
    }

    PointEx.prototype.blabla = function() {
        console.log("blabla");
    }

    // for(var key in Point.prototype) {
    //     PointEx.prototype[key] = Point.prototype[key];
    // }

    // PointEx.prototype.dump = Point.prototype.dump;

    return PointEx;
})();
