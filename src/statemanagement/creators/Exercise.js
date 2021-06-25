import { Exercise } from "../utils/actions";

export const ExerciseCreators = {
    requestExerciseData: PranyamaID => ({
        type: Exercise.GET_EXERCISE_DATA,
        payload: {
            PranyamaID: PranyamaID
        }
    }),
    requestExerciseDataSuccess: data => ({
        type: Exercise.ON_EXERCISE_DATA_SUCCESS,
        payload: data
    }),
    requestExerciseDataFail: error => ({
        type: Exercise.ON_EXERCISE_DATA_FAIL
    })
}