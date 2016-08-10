define([], function() {
    var global;

    console.log("network XXX");

    function httpGet() {
        console.log("httpGet");
    }

    return {
        httpGet: httpGet,
    };
});


