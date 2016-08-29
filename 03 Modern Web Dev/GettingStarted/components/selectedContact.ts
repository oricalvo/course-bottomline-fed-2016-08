import {appModule} from "../common/appModule";
import {AppDispatcher} from "../services/appDispatcher";
import {Contact, AppStore} from "../services/appStore";

class SelectedContactComponent {
    contact: Contact;
    summary: any;

    constructor(appDispatcher: AppDispatcher, appStore: AppStore) {
        appDispatcher.subscribe("appStateChanged", (e, args)=> {
            if(this.contact == appStore.selectedContact) {
                this.contact = appStore.selectedContact;
            }
        });
    }
}

appModule.component("selectedContact", <any>{
    template: require("./selectedContact.html!text"),
    controller: SelectedContactComponent,
    styles: require("./selectedContact.css!css"),
    bindings: {
    }
});
