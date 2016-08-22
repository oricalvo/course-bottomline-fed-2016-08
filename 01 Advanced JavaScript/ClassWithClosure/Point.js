function Point(x, y) {
    function dump() {
        console.log(x + ", " + y);
    }

    function move(dx, dy) {
        x+=dx;
        y+=dy;
    }

    return {
        dump: dump,
        move: move,
    };
}

var pt1 = new Point(5, 10);
var pt2 = new Point(10, 20);

pt1.dump();
pt2.dump();

console.log(pt1.dump == pt2.dump);

//
// var obj = {};
// var f = function(){}
// var arr = [];
// var d = new Date();

// function createG() {
//     return function g() {
//     }
// }
//
// createG();
// createG();
// createG();
