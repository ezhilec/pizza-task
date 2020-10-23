import React from 'react';
import {connect} from 'react-redux';
import {submitOrder, onChangeField} from '../actions/OrderActions';
import {getDeliveryTypes} from '../actions/DeliveryTypesActions';
import {Order} from '../components/Order'

class OrderContainer extends React.Component {
    render() {

        if (this.props.user.id) {
            for (let key in this.props.orderForm) {
                if (this.props.user[key] &&
                    this.props.orderForm[key] === '' &&
                    this.props.user[key] !== '') {
                    this.props.orderForm[key] = this.props.user[key];
                }
            }
        }

        const {isLoading, error, name, surname, address, email, phone, deliveryType, orderId}
            = this.props.orderForm;
        return (
            <Order
                submitOrder={this.props.submitOrder}
                onChangeField={this.props.onChangeField}
                isLoading={isLoading}
                error={error}
                name={name}
                surname={surname}
                address={address}
                email={email}
                phone={phone}
                deliveryType={deliveryType}
                deliveryTypes={this.props.deliveryTypes}
                getDeliveryTypes={this.props.getDeliveryTypes}
                cartItems={this.props.cartItems}
                orderId={orderId}
            />
        )
    }
}

const mapStateToProps = store => {
    return {
        orderForm: store.orderForm,
        user: store.user,
        deliveryTypes: store.deliveryTypes.list,
        cartItems: store.cart.list
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeField: (name, value) => dispatch(onChangeField(name, value)),
        submitOrder: (data) => dispatch(submitOrder(data)),
        getDeliveryTypes: (data) => dispatch(getDeliveryTypes()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderContainer);
