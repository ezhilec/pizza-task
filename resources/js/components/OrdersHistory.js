import React from "react";
import PropTypes from "prop-types";
import Loading from "./Loading";
import Error from "./Error";
import {Link} from "react-router-dom";

export class OrdersHistory extends React.Component {
    componentDidMount() {
        this.props.getOrders();
    }

    render() {
        if (this.props.isLoading) {
            return <Loading/>;
        }

        if (this.props.error) {
            return <Error message={this.props.error}/>;
        }

        if (this.props.orders.length === 0) {
            return (
                <div>
                    <h3>
                        No orders yet <Link to="/">Back to catalog</Link>
                    </h3>
                </div>
            );
        }

        return (
            <div className="orders">
                <h1>My orders history</h1>
                {this.props.orders.map((order) => {
                    return (
                        <div className={"card p-2 mb-2"}>
                            <div className="cart-product row" key={order.id}>
                                <div className="cart-product-img col-md-3">
                                    Date: {order.created_at}
                                </div>
                                <div className="cart-product-img col-md-5">
                                    Goods:
                                    <ul>
                                        {this.props.orders.map((product) => (
                                            <li>{product.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="cart-product-img col-md-2">
                                    Cart price: {order.currency} {order.total_cost}

                                </div>
                                <div className="cart-product-img col-md-2">
                                    Delivery price: {order.currency} {order.delivery_cost}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

OrdersHistory.propTypes = {
    orders: PropTypes.array.isRequired,
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    currencies: PropTypes.array,
    currentCurrency: PropTypes.string,
}
