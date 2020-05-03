import React, {Component} from "react";
import "./App.css";
import {Route, BrowserRouter, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import MainContainer from "./components/Main/MainContainer";
import Preloader from "./components/Preloader/Preloader";
import {initializeApp} from "./Redux/actions/App.actions";
import LoginContainer from "./components/Login/LoginContainer";
import {getAuth} from "./Redux/actions/Auth.actions";

class App extends Component {

    async componentDidMount  ()  {
        console.log('App mounted')
        await this.props.getAuth()
        console.log(this.props)
    }
    render() {
        // if (!this.props.initialaized) {
        //     return <Preloader/>
        // }
        return (
            <BrowserRouter>
                <div className="App">
                        <Route path="/main" component={() => <MainContainer/>}/>
                        <Route path="/" component={() => <LoginContainer/>}/>
                        <Route path="/pre" component={() => <Preloader/>}/>
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
    connect(mapStateToProps, {getAuth}))(App);


