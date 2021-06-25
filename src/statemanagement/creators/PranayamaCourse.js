import { PranayamaCourse } from "../utils/actions";

export const PranayamaCourseCreators = {
    requestExerciseData: courseId => ({
        type: PranayamaCourse.GET_PRANAYAMA_COURSE_DATA,
        payload: {
            courseId: courseId
        }
    }),
    requestExerciseDataSuccess: data => ({
        type: PranayamaCourse.ON_PRANAYAMA_COURSE_DATA_SUCCESS,
        payload: data
    }),
    requestExerciseDataFail: error => ({
        type: PranayamaCourse.ON_PRANAYAMA_COURSE_DATA_FAIL
    })
}