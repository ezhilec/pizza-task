import React from 'react'
import PropTypes from "prop-types";

class InputPlusMinus extends React.Component {
    render() {
        return (
            <div className="input-group mb-3 input-plus-minis">
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={this.props.handleMinus}>
                    -
                </button>
                <input type="text"
                       className="form-control"
                       placeholder=""
                       onChange={this.props.handleInputChange}
                       value={this.props.value}/>
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={this.props.handlePlus}>
                    +
                </button>
            </div>
        );
    }
}

InputPlusMinus.propTypes = {
    value: PropTypes.number.isRequired,
    handlePlus: PropTypes.func.isRequired,
    handleMinus: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
}

export default InputPlusMinus;
