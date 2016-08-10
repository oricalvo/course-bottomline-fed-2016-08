console.log("Network is loading ...");

function doSomething() {
    console.log("doSomething");
}

throw new Error("ooops");

exports.doSomething = doSomething;

//module.exports = {};