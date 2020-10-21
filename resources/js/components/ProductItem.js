import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {cn} from "classnames";
import InputPlusMinus from "./InputPlusMinus";

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
        this.props.updateCart(this.props.product.id, this.state.amount, true);

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
                        <h2 className="h4 product-name">
                            <Link to={`/catalog/${product.slug}`}>{product.name}</Link>
                        </h2>
                        {this.props.isAddedToCart &&
                        <div className="badge bg-success">Added</div>
                        }
                        <p className="card-text">{product.price} {product.currency}</p>
                        <div className="row">
                            <div className="col-4">
                                <InputPlusMinus
                                    value={this.state.amount}
                                    handlePlus={this.handlePlus}
                                    handleMinus={this.handleMinus}
                                    handleInputChange={this.handleInputChange}/>

                                {/*                               <div className="input-group mb-3">
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={this.handleMinus}>
                                        -
                                    </button>
                                    <input type="text"
                                           className="form-control"
                                           placeholder=""
                                           onChange={this.handleInputChange}
                                           value={this.state.amount}/>
                                    <button
                                        className="btn btn-outline-secondary"
                                        type="button"
                                        onClick={this.handlePlus}>
                                        +
                                    </button>
                                </div>*/}
                            </div>

                            <div className="col-8">
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
    updateCart: PropTypes.func.isRequired
};


export default ProductItem;
