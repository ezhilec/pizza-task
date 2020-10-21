import React from 'react';
import {connect} from 'react-redux';
import App from "../components/App";
import {getCart} from "../actions/CartActions";
import {getCurrencies} from "../actions/CurrencyActions";

class HeaderContainer extends React.Component {
    render() {
        return (
            <App
                isLogged={this.props.isLogged}
                getCart={this.props.getCart}
                getCurrencies={this.props.getCurrencies}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        isLogged: store.loginForm.isLogged,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getCart: () => dispatch(getCart()),
        getCurrencies: () => dispatch(getCurrencies()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer);
