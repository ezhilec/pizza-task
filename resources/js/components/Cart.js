import React from 'react'
import PropTypes from 'prop-types'
import Loading from "./Loading";
import Error from "./Error";
import {Link} from "react-router-dom";

export class Cart extends React.Component {
    componentDidMount() {
        this.props.getCart();
    }

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
                                <div className="input-group">
                                    <button className="btn btn-outline-secondary" type="button"
                                            id="button-addon1">-
                                    </button>
                                    <input type="text" className="form-control" placeholder=""
                                           aria-label="Example text with button addon"
                                           aria-describedby="button-addon1"
                                           value={item.amount}/>
                                    <button className="btn btn-outline-secondary" type="button"
                                            id="button-addon1">+
                                    </button>
                                </div>
                            </div>

                            <div className="cart-product-price-sum col-md-2">
                                {item.currency} {item.product.price * item.product.amount}
                            </div>

                            <div className="cart-product-delete col-md-1 d-flex justify-content-end">
                                <a href="#" className="btn btn-close"></a>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

Cart.propTypes = {
    carProducts: PropTypes.func.isRequired,
    getCart: PropTypes.func.isRequired,
    updateCart: PropTypes.func.isRequired,
    error: PropTypes.string,
}
