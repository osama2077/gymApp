import { Exercise } from "../../utils/actions";

const initalState = {
    payload: [{
        exersiceName: '',
        songURL: '',
        description: ''
    }],
    isLoading: true,
    error: false
}

const exerciseSessionReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case Exercise.GET_EXERCISE_DATA:
            return {
                ...state,
                isLoading: true,
                error: false
            }
        case Exercise.ON_EXERCISE_DATA_SUCCESS:
            return {
                ...state,
                payload: payload,
                isLoading: false,
                error: false
            }
        case Exercise.ON_EXERCISE_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true
            }
    
        default:
            return state;
    }
}

export default exerciseSessionReducer;