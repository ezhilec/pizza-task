import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export class Products extends React.Component {
    render() {
        return (
            <div className="products row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {this.props.products.map((product) => {
                    return (
                        <div className="product col" key={product.slug}>
                            <div className="card shadow-sm">
                                <img className={"product-img"} src={product.image}/>

                                <div className="card-body">
                                    <h2 className="h4 product-name">
                                        <Link to={`/catalog/${product.slug}`}>{product.name}</Link>
                                    </h2>
                                    <p className="card-text">{product.price}</p>
                                    <div className="row">
                                        <div className="col-4">
                                            <div className="input-group mb-3">
                                                <button className="btn btn-outline-secondary" type="button"
                                                        id="button-addon1">-
                                                </button>
                                                <input type="text" className="form-control" placeholder=""
                                                       aria-label="Example text with button addon"
                                                       aria-describedby="button-addon1"
                                                       value={1}/>
                                                <button className="btn btn-outline-secondary" type="button"
                                                        id="button-addon1">+
                                                </button>
                                            </div>
                                        </div>

                                        <div className="col-8">
                                            <a href="#" className="btn btn-primary">Add to cart</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
            ;
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
    count: PropTypes.number.isRequired,
}
