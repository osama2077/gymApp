import { SignUp } from "../utils/actions";

export const SignUpCreators = {
    setSignUpData: UserData => ({
        type: SignUp.SET_SIGNUP_DATA,
        payload: {
            name: UserData.name,
            age: UserData.age,
            gender: UserData.gender,
            weight: UserData.weight,
            height: UserData.height,
            personalityData: UserData.personalityData,
            exerciseData: UserData.exerciseData,
            notificationId: UserData.notificationId,
            subscriptionId: UserData.subscriptionId
        }
    }),
    onSignUpDataSuccess: data => ({
        type: SignUp.ON_SIGNUP_DATA_SUCCESS,
        payload: data
    }),
    onSignUpDataFail: error => ({
        type: SignUp.ON_SIGNUP_DATA_FAIL
    })
}