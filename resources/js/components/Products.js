import React from 'react'
import PropTypes from 'prop-types'
import Loading from "./Loading";
import Error from "./Error";
import ProductItem from "./ProductItem";

export class Products extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        if (this.props.isLoading ||
            !this.props.currencies ||
            !this.props.currentCurrency) {
            return <Loading/>;
        }

        if (this.props.error) {
            return <Error message={this.props.error}/>;
        }

        return (
            <div className="products row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-xl-3 g-3">
                {this.props.products.map((product) => {

                    const addedInCart = this.props.cartProducts.find((item) => {
                        return item.product.id === product.id
                    });

                    return (
                        <ProductItem
                            key={product.slug}
                            product={product}
                            updateCart={this.props.updateCart}
                            amountInCart={addedInCart ? addedInCart.amount : null}
                            currencies={this.props.currencies}
                            currentCurrency={this.props.currentCurrency}
                        />
                    );
                })}
            </div>
        );
    }
}

Products.propTypes = {
    getProducts: PropTypes.func.isRequired,
    updateCart: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
    cartProducts: PropTypes.array,
    error: PropTypes.string,
    currentCurrency: PropTypes.string,
    currencies: PropTypes.array
}
