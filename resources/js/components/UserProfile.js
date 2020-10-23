import React from 'react'
import Error from "./Error";
import PropTypes from "prop-types";
import Loading from "./Loading";

export class UserProfile extends React.Component {
    componentDidMount() {
        if (!this.props.deliveryTypes.length) {
            this.props.getDeliveryTypes();
        }

        this.props.getUser();
    }

    handleChange = e => {
        this.props.onChangeField(e.target.name, e.target.value)
    };

    handleSubmit = e => {
        this.props.updateUser({
            email: this.props.email,
            address: this.props.address,
            deliveryType: this.props.deliveryType,
            name: this.props.name,
            surname: this.props.surname,
            phone: this.props.phone,
        });
    };

    render() {
        if (this.props.isLoading ||
            !this.props.deliveryTypes) {
            return <Loading/>;
        }

        if (this.props.error) {
            return <Error message={this.props.error}/>;
        }

        return (
            <div className={"col-md-6 ml-auto mr-auto"}>
                <div className={'card p-3'}>
                    <h2>My profile</h2>

                    {this.props.error &&
                    <Error message={this.props.error}/>}

                    <div className={"mb-3"}>
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text"
                               name="name"
                               id="name"
                               className="form-control input-lg"
                               value={this.props.name}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor="surname" className="form-label">Surname</label>
                        <input type="text"
                               name="surname"
                               id="name"
                               className="form-control input-lg"
                               value={this.props.surname}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email"
                               name="email"
                               id="email"
                               className="form-control input-lg"
                               value={this.props.email}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="phone"
                               name="phone"
                               id="email"
                               className="form-control input-lg"
                               value={this.props.phone}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text"
                               name="address"
                               id="address"
                               className="form-control input-lg"
                               value={this.props.address}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <label htmlFor="deliveryType" className="form-label">Priority delivery method</label>
                        <select
                            className="form-select"
                            name="deliveryType"
                            value={this.props.deliveryType}
                            id="deliveryType"
                            aria-label="Delivery method"
                            onChange={this.handleChange}>
                            {this.props.deliveryTypes.map(item => (
                                    <option key={item.slug}
                                            value={item.slug}>
                                        {item.name}
                                    </option>
                                )
                            )}
                        </select>
                    </div>

                    <div className={"mb-3"}>

                        <input type="submit"
                               className="btn btn-success"
                               value="Save"
                               onClick={this.handleSubmit}/>
                    </div>
                </div>
            </div>
        );
    }
}

UserProfile.propTypes = {
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    submitUser: PropTypes.func,
    getDeliveryTypes: PropTypes.func.isRequired,
    email: PropTypes.string,
    name: PropTypes.string,
    surname: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    deliveryType: PropTypes.string,
    deliveryTypes: PropTypes.array,
};


export default UserProfile;
