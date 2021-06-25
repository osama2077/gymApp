import { PranayamaCourse } from "../../utils/actions";

const initalState = {
    payload: [{
        id: '',
        value: '',
    }],
    isLoading: true,
    error: false
}

const PranayamaCourseReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case PranayamaCourse.GET_PRANAYAMA_COURSE_DATA:
            return {
                ...state,
                isLoading: true,
                error: false
            }
        case PranayamaCourse.ON_PRANAYAMA_COURSE_DATA_SUCCESS:
            return {
                ...state,
                payload: payload,
                isLoading: false,
                error: false
            }
        case PranayamaCourse.ON_PRANAYAMA_COURSE_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true
            }
    
        default:
            return state;
    }
}

export default PranayamaCourseReducer;