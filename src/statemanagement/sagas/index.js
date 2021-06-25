import { all, fork } from "redux-saga/effects";
import { watchExerciseData } from "./exerciseSession/index";
import { watchSignUpData } from "./signUp/index";
import { watchPranayamaCourseData } from "./pranayamaCourse/index";

export default function* rootSaga() {
    yield all([
        fork(watchExerciseData),
        fork(watchSignUpData),
        fork(watchPranayamaCourseData)
    ])
}