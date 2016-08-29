import "./components/app";
import {appModule} from "./common/appModule";
import "./services/appDispatcher";

angular.bootstrap(document.getElementById("html"), [appModule.name]);
