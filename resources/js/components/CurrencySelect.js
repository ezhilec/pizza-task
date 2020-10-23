import React from 'react'
import PropTypes from "prop-types";
import Loading from "./Loading";

class CurrencySelect extends React.Component {
    render() {
        return (
            <div className="mr-4">

                    <div className="dropdown">
                        <button className="btn btn-outline-light dropdown-toggle"
                                type="button"
                                id="dropdownCurrencyButton"
                                data-toggle="dropdown"
                                aria-expanded="false">
                            {this.props.currentCurrency}
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {this.props.currencies.map(item => (
                                <li key={item.slug}>
                                    <a className="dropdown-item"
                                       href={"#"}
                                       onClick={() => this.props.setCurrentCurrency(item.slug)}>
                                        {item.slug}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

            </div>
        );
    }
}

CurrencySelect.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    currencies: PropTypes.array.isRequired,
    currentCurrency: PropTypes.string,
    setCurrentCurrency: PropTypes.func.isRequired,
};


export default CurrencySelect;
