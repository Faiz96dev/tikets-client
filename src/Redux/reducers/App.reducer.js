import {ACTION_TYPES} from "../actions/App.actions";


let initialState = {
    initialaized: false,

};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.INITIALIZED_SUCCESS:
            return {
                ...state,
                initialaized: true
            };
        default:
            return state;
    }
};


export default appReducer;
