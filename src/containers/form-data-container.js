import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as formActions from '../actions/form-actions'
import Form from "../components/form/form"

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(formActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Form)