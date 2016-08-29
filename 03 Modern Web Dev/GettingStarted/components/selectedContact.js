"use strict";
var appModule_1 = require("../common/appModule");
var SelectedContactComponent = (function () {
    function SelectedContactComponent(appDispatcher, appStore) {
        var _this = this;
        appDispatcher.subscribe("appStateChanged", function (e, args) {
            if (_this.contact == appStore.selectedContact) {
                _this.contact = appStore.selectedContact;
            }
        });
    }
    return SelectedContactComponent;
}());
appModule_1.appModule.component("selectedContact", {
    template: require("./selectedContact.html!text"),
    controller: SelectedContactComponent,
    styles: require("./selectedContact.css!css"),
    bindings: {}
});
//# sourceMappingURL=selectedContact.js.map