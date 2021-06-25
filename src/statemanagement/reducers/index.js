import { combineReducers } from "redux";
import exerciseSessionReducer from "./exerciseSession/index";
import signUpReducer from "./signUp/index";
import pranayamaCourseReducer from "./pranayamaCourse/index";

const rootReducer = combineReducers({
    exercise: exerciseSessionReducer,
    signUp: signUpReducer,
    pranayamaCourse: pranayamaCourseReducer,
});

export default rootReducer;