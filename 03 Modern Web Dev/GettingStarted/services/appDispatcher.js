"use strict";
var appModule_1 = require("../common/appModule");
var AppDispatcher = (function () {
    function AppDispatcher($rootScope) {
        this.$rootScope = $rootScope;
    }
    AppDispatcher.prototype.subscribe = function (eventName, listener) {
        this.$rootScope.$on(eventName, listener);
    };
    AppDispatcher.prototype.raise = function (eventName, args) {
        this.$rootScope.$broadcast(eventName, args);
    };
    return AppDispatcher;
}());
exports.AppDispatcher = AppDispatcher;
appModule_1.appModule.service("appDispatcher", AppDispatcher);
//# sourceMappingURL=appDispatcher.js.map