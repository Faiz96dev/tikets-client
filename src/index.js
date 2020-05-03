import React from "react";
import "./index.css";
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Redux/reducers/Root.reducer';
import ReduxThunk from 'redux-thunk';
// @ts-ignore
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from "./App";


const store = createStore(rootReducer,
    applyMiddleware(ReduxThunk),
)

let reranderTree = () => {

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById("root")
    );
};

reranderTree();




