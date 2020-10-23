import React from 'react'
import Error from "./Error";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {Redirect} from "react-router-dom";

export class Order extends React.Component {
    componentDidMount() {
        this.props.getDeliveryTypes();
    }

    handleChange = e => {
        this.props.onChangeField(e.target.name, e.target.value)
    };

    handleSubmit = e => {
        this.props.submitOrder({
            email: this.props.email,
            address: this.props.address,
            deliveryType: this.props.deliveryType,
            name: this.props.name,
            surname: this.props.surname,
            phone: this.props.phone
        });
    };

    render() {
        if (this.props.orderId) {
            return (
                <Redirect
                    to={{
                        pathname: "/thanks",
                        state: {orderId: this.props.orderId}
                    }}
                />
            );
        }

        if (this.props.cartItems.length === 0) {
            return (
                <div>
                    <h3>
                        Cart is empty. <Link to="/">Back to catalog</Link>
                    </h3>
                </div>
            );
        }

        return (
            <div className={"col-md-6 ml-auto mr-auto"}>
                <div className={'card p-3'}>
                    <h2>Order</h2>

                    {this.props.error &&
                    <Error message={this.props.error}/>}

                    <div className={"mb-3"}>
                        <label htmlFor="name" className="form-label">Your name</label>
                        <input type="text"
                               name="name"
                               id="name"
                               className="form-control input-lg"
                               placeholder="ex. Vasiliy"
                               value={this.props.name}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor="surname" className="form-label">Surname</label>
                        <input type="text"
                               name="surname"
                               id="name"
                               className="form-control input-lg"
                               placeholder="ex. Pupkin"
                               value={this.props.surname}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email"
                               name="email"
                               id="email"
                               className="form-control input-lg"
                               placeholder="ex. user@example.com"
                               value={this.props.email}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="phone"
                               name="phone"
                               id="email"
                               className="form-control input-lg"
                               placeholder="ex. +79991112233"
                               value={this.props.phone}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text"
                               name="address"
                               id="address"
                               className="form-control input-lg"
                               placeholder="ex. 12345, 28, Lenina st."
                               value={this.props.address}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor="deliveryType" className="form-label">Delivery method</label>
                        <select
                            className="form-select"
                            name="deliveryType"
                            id="deliveryType"
                            aria-label="Delivery method"
                            value={this.props.deliveryType}
                            onChange={this.handleChange}>
                            <option key={0} value={""}>---</option>
                            {this.props.deliveryTypes.map(item => (
                                    <option key={item.slug} value={item.slug}>{item.name}</option>
                                )
                            )}
                        </select>
                    </div>

                    <div className={"mb-3"}>

                        <input type="submit"
                               className="btn btn-success btn-lg"
                               value="Submit order"
                               onClick={this.handleSubmit}/>
                    </div>
                </div>
            </div>
        );
    }
}

Order.propTypes = {
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    submitOrder: PropTypes.func,
    getDeliveryTypes: PropTypes.func.isRequired,
    email: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    deliveryType: PropTypes.string,
    cartItems: PropTypes.array,
    orderId: PropTypes.number
};


export default Order;
