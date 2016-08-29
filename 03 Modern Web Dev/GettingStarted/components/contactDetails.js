"use strict";
var appModule_1 = require("../common/appModule");
var ContactDetailsComponent = (function () {
    function ContactDetailsComponent() {
    }
    ContactDetailsComponent.prototype.remove = function () {
        //
        //  raise the delete event
        //
        this.onDelete();
    };
    ContactDetailsComponent.prototype.select = function () {
        this.onSelect();
    };
    return ContactDetailsComponent;
}());
appModule_1.appModule.component("contactDetails", {
    template: require("./contactDetails.html!text"),
    controller: ContactDetailsComponent,
    styles: require("./contactDetails.css!css"),
    bindings: {
        "contact": "<",
        "onDelete": "&",
        "onSelect": "&",
    }
});
//# sourceMappingURL=contactDetails.js.map