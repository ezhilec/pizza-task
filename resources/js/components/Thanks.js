import React from 'react'
import PropTypes from "prop-types";
import {Redirect} from "react-router-dom";

class Thanks extends React.Component {
    render() {
        if (typeof this.props.location.state === 'undefined') {
            return <Redirect to='/'/>;
        }

        return (
            <div className="alert alert-success" role="alert">
                <p>Order #{this.props.location.state.orderId} received.</p>
                <p>We start to make pizza. Thank you!</p>
            </div>
        );
    }
}

Thanks.propTypes = {
    orderId: PropTypes.number
}

export default Thanks;
