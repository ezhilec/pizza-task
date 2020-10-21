import React from 'react';
import {connect} from 'react-redux';
import {submitLogin, onChangeField} from '../actions/LoginActions';
import {Login} from '../components/Login'

class LoginContainer extends React.Component {
    render() {
        const {isLoading, error, email, password} = this.props.loginForm;
        return (
            <Login
                submitLogin={this.props.submitLogin}
                onChangeField={this.props.onChangeField}
                isLoading={isLoading}
                error={error}
                email={email}
                password={password}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        loginForm: store.loginForm,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeField: (name, value) => dispatch(onChangeField(name, value)),
        submitLogin: (data) => dispatch(submitLogin(data)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
