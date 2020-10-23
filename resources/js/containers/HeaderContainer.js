import React from 'react';
import {connect} from 'react-redux';
import Header from "../components/Header";
import {submitLogout} from "../actions/LoginActions";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header
                isLogged={this.props.isLogged}
                cartCount={this.props.cartCount}
                submitLogout={this.props.submitLogout}
            />
        )
    }
}

const mapStateToProps = store => {
    const cartCount = store.cart.list.reduce((acc, item) => {
        return acc + item.amount;
    }, 0);

    return {
        isLogged: store.loginForm.isLogged,
        cartCount: cartCount,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        submitLogout: () => dispatch(submitLogout()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);
