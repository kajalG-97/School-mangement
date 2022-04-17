import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { AuthReducer } from "./auth/authReducer";
import thunk from "redux-thunk";
import { teacherReducer } from "./teacher/teacherReducer"
import { schoolReducer } from "./school/schoolReducer";
import { classReducer } from "./classes/classReducer";

const rootReducer = combineReducers({
    auth: AuthReducer,
    teacher: teacherReducer,
    school: schoolReducer,
    classes: classReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk));