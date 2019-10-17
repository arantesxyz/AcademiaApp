import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faTrashAlt, faEdit);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
