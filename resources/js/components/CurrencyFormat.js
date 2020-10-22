import React from 'react'
import PropTypes from "prop-types";
import {convertCurrency} from "../helpers/convertCurrency";

class CurrencyFormat extends React.Component {
    render() {
        const resultPrice = convertCurrency(
            this.props.price,
            this.props.currencies,
            this.props.currencyFrom,
            this.props.currencyTo,
        );

        return (
            <>
                {this.props.currencyTo} {resultPrice}
            </>
        );
    }
}

CurrencyFormat.propTypes = {
    price: PropTypes.number.isRequired,
    currencies: PropTypes.array.isRequired,
    currencyFrom: PropTypes.string.isRequired,
    currencyTo: PropTypes.string.isRequired
}

export default CurrencyFormat;
