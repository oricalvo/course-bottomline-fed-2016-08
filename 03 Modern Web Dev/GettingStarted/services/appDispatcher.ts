import {appModule} from "../common/appModule";

export class AppDispatcher {
    constructor(private $rootScope) {
    }

    subscribe(eventName, listener) {
        this.$rootScope.$on(eventName, listener);
    }

    raise(eventName, args) {
        this.$rootScope.$broadcast(eventName, args);
    }
}

appModule.service("appDispatcher", AppDispatcher);
