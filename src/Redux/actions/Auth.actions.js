import * as authService from '../../services/auth.service';
import {getAccessToken, setTokensCookies} from "../../services/cookies.service";

export const ACTION_TYPES = {
    GET_AUTH: 'GET_AUTH',
    SET_AUTH: 'SET_AUTH',
    REMOVE_AUTH: 'REMOVE_AUTH'

}
export const getAuth =  () => (dispatch, getState) => {
    try {
        const bla = async () => {
            let token = await getAccessToken()
            console.log(token + ' TKAnjenwioejv wv')
            if (token){
                return dispatch({
                    type: ACTION_TYPES.SET_AUTH })
            }
        }
        bla()

    } catch (err) {
        console.log(err)
    }
};
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

