import {connect} from "react-redux";
import {bindActionCreators, compose} from 'redux';
import * as AuthActions from '../../Redux/actions/Auth.actions';
import Dashboard from "./Main";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AuthActions, dispatch)
    }
}

export default compose(
    connect(null, mapDispatchToProps),
    withAuthRedirect
)(Dashboard)
