import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as AuthActions from '../../Redux/actions/Auth.actions';
import LoginPage from "./Login";
import {Login} from "../../Redux/actions/Auth.actions";

let mapDispatchToProps = dispatch =>   {
    return {
        Login: (data) => {
            dispatch(Login(data))
        } ,
    }
}
export default connect(null, mapDispatchToProps)(LoginPage)
