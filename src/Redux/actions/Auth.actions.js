import * as authService from '../../services/auth.service';
import {setTokensCookies} from "../../services/cookies.service";

export const ACTION_TYPES = {
    GET_AUTH: 'GET_AUTH',
    SET_AUTH: 'SET_AUTH',
    REMOVE_AUTH: 'REMOVE_AUTH'

}
// export const getAuth = () => (dispatch, getState) => {
//     try {
//         if (authService.getAuth()){
//             return dispatch({
//                 type: ACTION_TYPES.SET_AUTH })
//         }
//     } catch (err) {
//         console.log(err)
//     }
// };
export const Login = (data) => async (dispatch, getState) => {
    try {
        let tokens = await authService.LogIn(data)
        if (tokens) {
            setTokensCookies(tokens)
            return dispatch({
                type: ACTION_TYPES.SET_AUTH
            })
        }
    } catch (err) {
        console.log(err)
    }
};

// export const removeAuth = () => (dispatch, getState) => {
//     try {
//         authService.removeAuth()
//         return dispatch({
//             type: ACTION_TYPES.REMOVE_AUTH })
//     } catch (err) {
//         console.log(err)
//     }
// };

