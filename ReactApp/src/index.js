console.log("This is the first file in front end applicaiton!!!!")

import React from "react";
import * as ReactDOM from "react-dom/client"
import ApplicationComponent from "./app/app";
import { Provider } from "react-redux"; //sets store as top level component of react application
import store from "./state/store";
import 'bootstrap/dist/css/bootstrap.min.css';

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

//bootstrapping react application in root element of index.html
root.render(
    <Provider store={store}>
        <ApplicationComponent/>
    </Provider>
    
)