import React from "react";
import * as ReactDOM from "react-dom/client"
import ApplicationComponent from "./app/app";
import {Provider} from "react-redux"
import store from "./state/store"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <ApplicationComponent/>
    </Provider>
)