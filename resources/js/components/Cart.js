import React from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";
import Error from "./Error";
import CartItem from "./CartItem";

export class Cart extends React.Component {
    render() {
        if (this.props.isLoading) {
            return <Loading/>;
        }

        if (this.props.error) {
            return <Error message={this.props.error}/>;
        }

        return (
            <div className="cart">
                {this.props.cartItems.map((item) => {
                    return (
                        <CartItem
                            key = {item.product.id}
                            item={item}
                            updateCart={this.props.updateCart}/>
                    );
                })}
            </div>
        );
    }
}

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    updateCart: PropTypes.func.isRequired,
    error: PropTypes.string,
}
