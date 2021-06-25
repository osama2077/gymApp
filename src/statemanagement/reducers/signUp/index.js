import { SignUp } from "../../utils/actions";

const initalState = {
    payload: {
        name: '', 
        age: 0, 
        gender: 0, 
        weight: 0, 
        height: 0, 
        personalityData: [], 
        exerciseData: [],
        notificationId: 1,
        subscriptionId: 1
    },
    isLoading: false,
    error: false
}

const signUpReducer = (state = initalState, { type, payload }) => {
    switch (type) {
        case SignUp.SET_SIGNUP_DATA:
            return {
                ...state,
                isLoading: true,
                error: false
            }
        case SignUp.ON_SIGNUP_DATA_SUCCESS:
            return {
                ...state,
                payload: payload,
                isLoading: false,
                error: false
            }
        case SignUp.ON_SIGNUP_DATA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: true
            }
    
        default:
            return state;
    }
}

export default signUpReducer;