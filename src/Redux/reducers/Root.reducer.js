import {combineReducers} from 'redux';
import auth from './Auth.reducer';
import app from './App.reducer';


export default combineReducers({
    auth,
    app
})
