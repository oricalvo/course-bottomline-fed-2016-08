var map = {};

map["ori"] = 1;
map["roni"] = 2;

for(var key in map) {
    console.log(key + ": " + map[key]);
}

delete map["ori"];
//map["ori"] = undefined;

for(var key in map) {
    console.log(key + ": " + map[key]);
}




var arr = [1,2,3];

for(var i=0; i<arr.length; i++) {
}

arr.forEach(function(val) {
});

for(var index in arr) {
    console.log(key + ": " + map[key]);
}

function g() {
    y = 12;

    if(true) {
        var y = 13;
    }

    //y = 12;
}

function g() {
    execute();

    // function execute() {
    // }

    var execute = function() {
    }
}

var num = 10;

function g() {

    var num;

    console.log(num);

    num = 11;
}
