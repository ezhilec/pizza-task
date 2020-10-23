import React from 'react';
import {connect} from 'react-redux';
import {submitRegister, onChangeField} from '../actions/RegisterActions';
import {Register} from '../components/Register'

class RegisterContainer extends React.Component {
    render() {
        const {isLoading, error, name, email, phone, password, password_confirmation}
                = this.props.registerForm;
        return (
            <Register
                submitRegister={this.props.submitRegister}
                onChangeField={this.props.onChangeField}
                isLoading={isLoading}
                error={error}
                name={name}
                email={email}
                phone={phone}
                password={password}
                password_confirmation={password_confirmation}
                isLogged={this.props.isLogged}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        registerForm: store.registerForm,
        isLogged: store.loginForm.isLogged
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeField: (name, value) => dispatch(onChangeField(name, value)),
        submitRegister: (data) => dispatch(submitRegister(data)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterContainer);
