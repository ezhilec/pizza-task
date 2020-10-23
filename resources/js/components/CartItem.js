import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import InputPlusMinus from "./InputPlusMinus";
import CurrencyFormat from "./CurrencyFormat";

class CartItem extends React.Component {

    handlePlus = () => {
        this.props.updateCart(
            this.props.item.product.id,
            +this.props.item.amount + 1,
            false
        );
    };

    handleMinus = () => {
        this.props.updateCart(
            this.props.item.product.id,
            (+this.props.item.amount - 1) > 1 ? +this.props.item.amount - 1 : 1,
            false
        );
    };

    handleInputChange = (e) => {
        const rules = /^[0-9\b]+$/;
        if (rules.test(e.target.value) && e.target.value > 0) {
            this.props.updateCart(
                this.props.item.product.id,
                e.target.value,
                false
            );
        }
    };

    handleDeleteCartItem = () => {
        this.props.updateCart(
            this.props.item.product.id,
            0,
            false
        );
    };

    render() {
        const item = this.props.item;

        return (
            <div className={"card p-2 mb-2"}>
                <div className="cart-product row" key={item.product.slug}>

                    <div className="cart-product-img col-md-2">
                        <img className={"product-img img-fluid"} src={item.product.image_url}/>
                    </div>

                    <div className="cart-product-name col-md-3">
                        <h2 className="h4 product-name">
                            {item.product.name}
                        </h2>
                    </div>

                    <div className="cart-product-price-one col-md-2">
                        <CurrencyFormat
                            price={+item.price}
                            currencies={this.props.currencies}
                            currencyFrom={item.currency}
                            currencyTo={this.props.currentCurrency}/>
                    </div>

                    <div className="cart-product-count col-md-2">
                        <InputPlusMinus
                            value={item.amount}
                            handlePlus={this.handlePlus}
                            handleMinus={this.handleMinus}
                            handleInputChange={this.handleInputChange}/>
                    </div>

                    <div className="cart-product-price-sum col-md-2">
                        <CurrencyFormat
                            price={item.price * item.amount}
                            currencies={this.props.currencies}
                            currencyFrom={item.currency}
                            currencyTo={this.props.currentCurrency}/>
                    </div>

                    <div className="cart-product-delete col-md-1 d-flex justify-content-end">
                        <a onClick={this.handleDeleteCartItem} className="btn btn-close"></a>
                    </div>
                </div>
            </div>
        );
    }
}

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    updateCart: PropTypes.func.isRequired,
    currencies: PropTypes.array.isRequired,
    currentCurrency: PropTypes.string.isRequired
};


export default CartItem;
