import React from 'react'
import { connect } from 'react-redux'
import { Products } from '../components/Products'
//import { getProducts } from '../actions/ProductsActions'

class ProductsContainer extends React.Component {
    render() {
        const {list, count} = this.props.products;
        return (
            <Products
                products={list}
                count={count}
                // isFetching={products.isLoading}
                // error={products.error}
                // getRoducts={getRoducts}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        products: store.products,
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         getRoducts: () => dispatch(getProducts()),
//     }
// }

export default connect(
    mapStateToProps,
    //mapDispatchToProps
)(ProductsContainer)
