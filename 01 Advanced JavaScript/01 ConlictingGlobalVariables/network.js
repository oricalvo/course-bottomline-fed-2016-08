

var myApp = myApp || {};

myApp.network = (function () {
    "use strict";



    function g() {
        console.log(this);

        //this.x = 123;
    }

    g();

    var lastActivity;
    var cachedContacts;

    function httpGet() {
        console.log("httpGet");
    }

    function httpPost() {
    }

    function getLastActivity() {
    }

    function doSomething() {
        console.log("network");
    }

    return {
        httpGet: httpGet,
        httpPost: httpPost,
    };
})();
