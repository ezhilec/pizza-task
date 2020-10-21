import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import InputPlusMinus from "./InputPlusMinus";

class CartItem extends React.Component {
    state = {
        amount: 1
    };

    handlePlus = () => {
        this.props.updateCart({amount: +this.props.item.amount + 1});
    };

    handleMinus = () => {
        this.props.updateCart(
            this.props.product.id,
            (+this.props.item.amount - 1) > 1 ? +this.props.item.amount - 1 : 1
        );
    };

    handleInputChange = (e) => {
        const rules = /^[0-9\b]+$/;
        if (rules.test(e.target.value) && e.target.value > 0) {
            this.props.updateCart(this.props.product.id, e.target.value);
        }
    };

    handleUpdateCartItem = () => {
        this.props.updateCart(this.props.product.id, this.props.item.amount);
    };

    handleDeleteCartItem = () => {
        this.props.updateCart(this.props.product.id, 0);
    };

    render() {
        const item = this.props.item;

        console.log(55,this.props)

        return (
            <div className="cart-product row mb-2" key={item.product.slug}>

                <div className="cart-product-img col-md-2">
                    <img className={"product-img img-fluid"} src={item.product.image_url}/>
                </div>

                <div className="cart-product-name col-md-3">
                    <h2 className="h4 product-name">
                        <Link to={`/catalog/${item.product.slug}`}>{item.product.name}</Link>
                    </h2>
                </div>

                <div className="cart-product-price-one col-md-2">
                    {item.currency} {item.product.price}
                </div>

                <div className="cart-product-count col-md-2">
                    <InputPlusMinus
                        value={item.amount}
                        handlePlus={this.handlePlus}
                        handleMinus={this.handleMinus}
                        handleInputChange={this.handleInputChange}/>
                </div>

                <div className="cart-product-price-sum col-md-2">
                    {item.currency} {item.product.price * item.amount}
                </div>

                <div className="cart-product-delete col-md-1 d-flex justify-content-end">
                    <a onClick={this.handleDeleteCartItem} className="btn btn-close"></a>
                </div>
            </div>
        );
    }
}

CartItem.propTypes = {
    product: PropTypes.object.isRequired,
    updateCart: PropTypes.func.isRequired
};


export default CartItem;
