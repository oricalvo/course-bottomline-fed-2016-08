import {appModule} from "../common/appModule";
import {Contact} from "../services/appStore";

class ContactDetailsComponent {
    contact: Contact;
    onDelete: Function;
    onSelect: Function;

    constructor() {
    }

    remove() {
        //
        //  raise the delete event
        //
        this.onDelete();
    }

    select() {
        this.onSelect();
    }
}

appModule.component("contactDetails", <any>{
    template: require("./contactDetails.html!text"),
    controller: ContactDetailsComponent,
    styles: require("./contactDetails.css!css"),
    bindings: {
        "contact": "<",
        "onDelete": "&",
        "onSelect": "&",
    }
});
