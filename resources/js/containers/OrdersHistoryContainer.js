import React from 'react';
import {connect} from 'react-redux';
import {OrdersHistory} from '../components/OrdersHistory';
import {getOrders} from '../actions/OrdersHistoryActions';

class OrdersHistoryContainer extends React.Component {
    render() {

        return (
            <OrdersHistory
                orders={this.props.orders}
                isLoading={this.props.isLoading}
                error={this.props.error}
                getOrders={this.props.getOrders}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        orders: store.orders.list,
        isLoading: store.orders.isLoading,
        error: store.orders.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(getOrders())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrdersHistoryContainer);
