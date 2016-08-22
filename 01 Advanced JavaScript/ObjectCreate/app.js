var a = {
    id: 123,
};

var b = Object.create(a);

a.name = "Ori";

console.log(b.id);
console.log(b.name);

b.id = "XXX";

console.log(a.id);