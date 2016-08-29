import {appModule} from "../common/appModule";

export class AppStore {
    selectedContact: Contact;

    constructor() {
    }
}

export interface Contact {
    id: number;
    name: string;
}

appModule.service("appStore", AppStore);
