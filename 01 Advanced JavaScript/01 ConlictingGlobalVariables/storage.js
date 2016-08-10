var myApp = myApp || {};

myApp.storage = (function() {

    function saveAll() {
        //network.httpPost();

        console.log("saveAll");
    }

    function getContacts() {
    }

    function doSomething() {
        console.log("storage");
    }

    return {
        saveAll: saveAll,
        getContacts: getContacts,
    };
})();
