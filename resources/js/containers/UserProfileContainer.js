import React from 'react';
import {connect} from 'react-redux';
import {getUser, updateUser, onChangeField} from '../actions/UserActions';
import {getDeliveryTypes} from '../actions/DeliveryTypesActions';
import {UserProfile} from '../components/UserProfile'

class UserProfileContainer extends React.Component {
    render() {
        const {isLoading, error, name, email, phone, password, password_confirmation}
                = this.props.user;
        return (
            <UserProfile
                updateUser={this.props.updateUser}
                onChangeField={this.props.onChangeField}
                isLoading={isLoading}
                error={error}
                name={name}
                email={email}
                phone={phone}
                password={password}
                password_confirmation={password_confirmation}
                getDeliveryTypes={this.props.getDeliveryTypes}
                getUser={this.props.getUser}
                deliveryTypes={this.props.deliveryTypes}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        isLogged: store.loginForm.isLogged,
        deliveryTypes: store.deliveryTypes.list,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeField: (name, value) => dispatch(onChangeField(name, value)),
        getUser: (data) => dispatch(getUser(data)),
        updateUser: (data) => dispatch(updateUser(data)),
        getDeliveryTypes: () => dispatch(getDeliveryTypes()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfileContainer);
