import { put, call, takeLatest } from "redux-saga/effects";
import { Exercise } from "../../utils/actions";
import { ExerciseCreators as Creators } from "../../creators/Exercise";
import api from "../../../services/api";

function* getExerciseData(action) {
    try {
        const { PranyamaID } = action.payload;
        const response = yield call(api.post, '/pranayama/exersicesession/', {
            pranayamaId: PranyamaID
        })
        yield put(Creators.requestExerciseDataSuccess(response.data))
    } catch (error) {
        console.log(error);
        yield put(Creators.requestExerciseDataFail());
    }
}


export function* watchExerciseData() {
    yield takeLatest(Exercise.GET_EXERCISE_DATA, getExerciseData);
}