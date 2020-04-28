

import {getAccessToken} from "../../services/cookies.service";

export const ACTION_TYPES = {
    INITIALIZED_SUCCESS : "INITIALIZED_SUCCESS"
}

export const initializeApp = () => (dispatch) => {
    let  token = getAccessToken()

    if (token){
        return dispatch({
            type: ACTION_TYPES.INITIALIZED_SUCCESS
        })
    }
}
