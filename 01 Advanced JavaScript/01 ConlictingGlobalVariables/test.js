function polyfillJSON() {
    if(window.JSON === undefined) {
        window.JSON = {
            parse: function() {
            },
            stringify: function() {
            }
        };
    }
}

polyfillJSON();

(function() {

    myApp.storage.saveAll();
    myApp.network.httpGet();

})();
