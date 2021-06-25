import { put, call, takeLatest } from "redux-saga/effects";
import { PranayamaCourse } from "../../utils/actions";
import { PranayamaCourseCreators as Creators } from "../../creators/PranayamaCourse";
import api from "../../../services/api";

function* getPranayamaCourseData(action) {
    try {
        const { courseId } = action.payload;
        const response = yield call(api.post, '/pranayama/', {
            courseId: courseId
        })
        yield put(Creators.requestExerciseDataSuccess(response.data))
    } catch (error) {
        console.log(error);
        yield put(Creators.requestExerciseDataFail());
    }
}


export function* watchPranayamaCourseData() {
    yield takeLatest(PranayamaCourse.GET_PRANAYAMA_COURSE_DATA, getPranayamaCourseData);
}