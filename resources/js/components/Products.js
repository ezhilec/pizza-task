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
        if (this.props.isLoading) {
            return <Loading/>;
        }

        if (this.props.error) {
            return <Error message={this.props.error}/>;
        }

        return (
            <div className="products row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {this.props.products.map((product) => {

                    const isAddedToCart = this.props.cartProducts.some((item) => {
                        console.log(item.product.id, product.id)
                        return item.product.id === product.id
                    });

                    console.log(11, this.props, isAddedToCart)
                    return (
                        <ProductItem
                            key={product.slug}
                            product={product}
                            updateCart={this.props.updateCart}
                            isAddedToCart={isAddedToCart}
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
}
