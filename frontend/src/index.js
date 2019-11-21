import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faTrashAlt,
    faEdit,
    faHome,
    faUniversity,
    faUserGraduate,
    faFileInvoiceDollar,
    faBars,
    faTimes
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faTrashAlt,
    faEdit,
    faHome,
    faUniversity,
    faUserGraduate,
    faFileInvoiceDollar,
    faBars,
    faTimes
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
