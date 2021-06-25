import { put, call, takeLatest } from "redux-saga/effects";
import { SignUp } from "../../utils/actions";
import { SignUpCreators as Creators } from "../../creators/SignUp";
import api from "../../../services/api";

function* setSignUpData(action) {
    try {
        const { name, age, gender, weight, height, personalityData, exerciseData, notificationId, subscriptionId } = action.payload;
        const response = yield call(api.post, '/users/', {
            name, 
            age, 
            gender, 
            weight, 
            height, 
            personalityData, 
            exerciseData,
            notificationId, 
            subscriptionId
        })
        yield put(Creators.onSignUpDataSuccess(response.data))
    } catch (error) {
        yield put(Creators.onSignUpDataFail());
    }
}


export function* watchSignUpData() {
    yield takeLatest(SignUp.SET_SIGNUP_DATA, setSignUpData);
}