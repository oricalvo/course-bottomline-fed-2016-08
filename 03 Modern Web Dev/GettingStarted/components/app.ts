import {appModule} from "../common/appModule";
import "./contactDetails";
import "./selectedContact";
import {AppDispatcher} from "../services/appDispatcher";
import {Contact, AppStore} from "../services/appStore";

class AppComponent {
    contacts: Contact[];

    constructor(private appDispatcher: AppDispatcher, private appStore: AppStore) {
        this.contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ];
    }

    doSomething() {
        alert("Bla bla");
    }

    removeContact(index) {
        this.contacts.splice(index, 1);
    }

    selectContact(contact) {
        console.log("SELECT", contact);

        this.appStore.selectedContact = contact;

        //this.appDispatcher.raise("appStateChanged");
    }
}

appModule.component("app", <any>{
    template: require("./app.html!text"),
    controller: AppComponent,
    styles: require("./app.css!css"),
});
