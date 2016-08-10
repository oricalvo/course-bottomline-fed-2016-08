var map = {};
var nextId = 1;

function addObject(obj) {
    if(!obj.$id) {
        obj.$id = ++nextId;
    }

    map[obj.$id] = obj;
}

function hasObject(obj) {
    if(!obj.$id) {
        return false;
    }

    return !!map[obj.$id];
}

var obj = {id:1};
addObject(obj);

console.log(hasObject({id: 1}));
console.log(hasObject(obj));

