import "./storage";

console.log("main 7");

class Point123 {
    x: number;
    y: number;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    dump() {
        console.log(this.x + ", " + this.y);
    }
}

class PointEx extends Point123 {
    constructor(x, y, z) {
        super(x, y);
    }
}

var pt = new Point123(5, 10);
