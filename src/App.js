import React, {Component} from "react";
import "./App.css";
import {Route, BrowserRouter, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import MainContainer from "./components/Main/MainContainer";
import Preloader from "./components/Preloader/Preloader";
import {initializeApp} from "./Redux/actions/Auth.actions";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialaized) {
            debugger
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="App">
                        <Route path="/main" component={() => <MainContainer/>}/>
                        <Route path="/login" component={() => <Login/>}/>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => ({
    initialaized: state.app.initialaized
})
export default compose(
    // withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
