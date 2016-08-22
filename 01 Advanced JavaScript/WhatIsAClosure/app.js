
function g(x) {
    function inc() {
        return x++;
    }

    return inc;
}

var h1 = g(10);
console.log(h1());
console.log(h1());

var h2 = g(10);
console.log(h2());

console.log(h1());

console.log(h1 == h2);


function f() {
    return {};
}

function f() {
    return function g() {
    }
}