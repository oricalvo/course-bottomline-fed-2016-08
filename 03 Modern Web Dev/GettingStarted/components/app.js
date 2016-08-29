"use strict";
var appModule_1 = require("../common/appModule");
require("./contactDetails");
require("./selectedContact");
var AppComponent = (function () {
    function AppComponent(appDispatcher, appStore) {
        this.appDispatcher = appDispatcher;
        this.appStore = appStore;
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }
    AppComponent.prototype.doSomething = function () {
        alert("Bla bla");
    };
    AppComponent.prototype.removeContact = function (index) {
        this.contacts.splice(index, 1);
    };
    AppComponent.prototype.selectContact = function (contact) {
        console.log("SELECT", contact);
        this.appStore.selectedContact = contact;
        //this.appDispatcher.raise("appStateChanged");
    };
    return AppComponent;
}());
appModule_1.appModule.component("app", {
    template: require("./app.html!text"),
    controller: AppComponent,
    styles: require("./app.css!css"),
});
//# sourceMappingURL=app.js.map