import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import InputPlusMinus from "./InputPlusMinus";
import CurrencyFormat from "./CurrencyFormat";

class ProductItem extends React.Component {
    state = {
        amount: 1
    };

    handlePlus = () => {
        this.setState({
            amount: +this.state.amount + 1
        });
    };

    handleMinus = () => {
        this.setState({
            amount: (+this.state.amount - 1) > 1 ? +this.state.amount - 1 : 1
        });
    };

    handleInputChange = (e) => {
        const rules = /^[0-9\b]+$/;
        if (rules.test(e.target.value) && e.target.value > 0) {
            this.setState({
                amount: e.target.value
            });
        }
    };

    handleAddToCart = () => {
        this.props.updateCart(
            this.props.product.id,
            this.props.amountInCart + this.state.amount
        );

        this.setState({
            amount: 1
        });
    };

    render() {
        const product = this.props.product;

        return (
            <div className="product col">
                <div className="card shadow-sm">
                    <img className={"product-img"} src={product.image_url}/>

                    <div className="card-body">

                        <div className="product-name">
                            <h2 className="h4 d-inline-block">
                                {product.name}
                            </h2>
                            {this.props.amountInCart &&
                            <div className="badge bg-success ml-2">
                                Added {this.props.amountInCart}
                            </div>
                            }
                        </div>
                        <p className="muted">
                            {product.description}
                        </p>
                        <p className={"h5"}>
                            <CurrencyFormat
                                price={+product.price}
                                currencies={this.props.currencies}
                                currencyFrom={product.currency}
                                currencyTo={this.props.currentCurrency}/>
                        </p>
                        <div className="row">
                            <div className="col-md-5">
                                <InputPlusMinus
                                    value={this.state.amount}
                                    handlePlus={this.handlePlus}
                                    handleMinus={this.handleMinus}
                                    handleInputChange={this.handleInputChange}/>

                            </div>

                            <div className="col-md-7">
                                {!this.props.isAddedToCart ?
                                    <a className={"btn btn-primary"}
                                       onClick={this.handleAddToCart}>
                                        Add to cart
                                    </a> :
                                    <a className={"btn btn-primary"}
                                       onClick={this.handleAddToCart}>
                                        Add more
                                    </a>
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired,
    updateCart: PropTypes.func.isRequired,
    currencies: PropTypes.array.isRequired,
    currentCurrency: PropTypes.string.isRequired
};


export default ProductItem;
