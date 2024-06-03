import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import studentReducer from "./student/studentReducer";

let rootReducer = combineReducers({
    studentReducer,
})

export default configureStore(
    {reducer: rootReducer},
    {},
)