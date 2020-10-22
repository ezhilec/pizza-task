import React from 'react';
import {connect} from 'react-redux';
import {setCurrentCurrency} from '../actions/CurrencyActions';
import CurrencySelect from "../components/CurrencySelect";

class CurrencySelectContainer extends React.Component {
    render() {
        return (
            <CurrencySelect
                setCurrentCurrency={this.props.setCurrentCurrency}
                currencies={this.props.currencies}
                currentCurrency={this.props.currentCurrency}
                isLoading={this.props.isLoading}
                error={this.props.error}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        isLoading: store.currency.isLoading,
        currencies: store.currency.list,
        currentCurrency: store.currency.currentCurrency,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setCurrentCurrency: (slug) => dispatch(setCurrentCurrency(slug)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencySelectContainer);
