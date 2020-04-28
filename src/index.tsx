import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./index.css";
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Redux/reducers/Root.reducer';
import ReduxThunk from 'redux-thunk';
// @ts-ignore
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import LoginContainer from "./components/Login/LoginContainer";
import MainContainer from "./components/Main/MainContainer";

const store = createStore(rootReducer
    , applyMiddleware(ReduxThunk))


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/login" component={LoginContainer}/>
            <Route exact path="/main" component={MainContainer}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);




