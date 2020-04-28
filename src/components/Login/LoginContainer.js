import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import * as AuthActions from '../../Redux/actions/Auth.actions';
import LoginPage from "./Login";
import {Login} from "../../Redux/actions/Auth.actions";

function mapDispatchToProps (dispatch)   {
    return {
        Login: (data) => {
            dispatch(Login(data))
            this.history.push('/main')
        } ,
    }
}
export default connect(null, mapDispatchToProps)(LoginPage)
