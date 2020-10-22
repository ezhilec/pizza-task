import React from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";
import Error from "./Error";
import CartItem from "./CartItem";
import ProductItem from "./ProductItem";
import {Link} from "react-router-dom";

export class Cart extends React.Component {
    render() {
        if (this.props.isLoading ||
            !this.props.currencies ||
            !this.props.currentCurrency) {
            return <Loading/>;
        }

        if (this.props.error) {
            return <Error message={this.props.error}/>;
        }

        if (this.props.cartItems.length === 0) {
            return (
                <div>
                    <h3>
                        Cart is empty. <Link to="/">Back to catalog</Link>
                    </h3>
                </div>
            );
        }

        return (
            <div className="cart">
                <h1>Cart</h1>
                {this.props.cartItems.map((item) => {
                    return (
                        <CartItem
                            key = {item.product.id}
                            item={item}
                            updateCart={this.props.updateCart}
                            currencies={this.props.currencies}
                            currentCurrency={this.props.currentCurrency}
                        />
                    );
                })}

                <div className={"cart-totals"}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="cart-total-count">
                                Goods count: {this.props.cartCount}
                            </div>
                            <div className="cart-subtotal-price">
                                Goods total: {this.props.currentCurrency} {this.props.cartPrice}
                            </div>
                        </div>
                        <div className="col-md-6">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    updateCart: PropTypes.func.isRequired,
    error: PropTypes.string,
    currencies: PropTypes.array,
    currentCurrency: PropTypes.string,
    cartCount: PropTypes.number,
    cartPrice: PropTypes.number
}
