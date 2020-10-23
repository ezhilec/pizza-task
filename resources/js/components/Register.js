import React from 'react'
import {Redirect} from "react-router-dom";
import Error from "./Error";
import PropTypes from "prop-types";

export class Register extends React.Component {
    state = {
        agree: false
    };

    handleChange = e => {
        this.props.onChangeField(e.target.name, e.target.value)
    };

    handleCheck = e => {
        this.setState({agree: e.target.checked});
    };

    handleSubmit = e => {
        this.props.submitRegister({
            email: this.props.email,
            password: this.props.password,
            password_confirmation: this.props.password_confirmation,
            name: this.props.name,
            phone: this.props.phone
        });
    };

    render() {
        if (this.props.isLogged) {
            return <Redirect to='/'/>;
        }

        return (
            <div className={"col-md-4 ml-auto mr-auto"}>
                <div className={'card p-3'}>
                    <h2>Sign up</h2>

                    {this.props.error &&
                    <Error message={this.props.error}/>}

                    <div className={"mb-3"}>
                        <input type="text"
                               name="name"
                               id="name"
                               className="form-control input-lg"
                               placeholder="Your name"
                               value={this.props.name}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <input type="email"
                               name="email"
                               id="email"
                               className="form-control input-lg"
                               placeholder="Email Address"
                               value={this.props.email}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <input type="phone"
                               name="phone"
                               id="email"
                               className="form-control input-lg"
                               placeholder="Phone"
                               value={this.props.phone}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <input type="password"
                               name="password"
                               id="password"
                               className="form-control input-lg"
                               placeholder="Password"
                               value={this.props.password}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"mb-3"}>
                        <input type="password"
                               name="password_confirmation"
                               id="password_confirmation"
                               className="form-control input-lg"
                               placeholder="Password one more time"
                               value={this.props.password_confirmation}
                               onChange={this.handleChange}/>
                    </div>

                    <div className={"form-check mb-3"}>
                        <label className="form-check-label">
                            <input type="checkbox"
                                   className="form-check-input"
                                   value={this.state.agree}
                                   onChange={this.handleCheck}/>
                            By Clicking register you're agree to our policy & terms
                        </label>
                    </div>
                    <div className={"mb-3"}>
                        <input type="submit"
                               className="btn btn-success"
                               value="Register"
                               disabled={!this.state.agree}
                               onClick={this.handleSubmit}/>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    submitLRegister: PropTypes.func,
    isLogged: PropTypes.bool.isRequired,
    email: PropTypes.string,
    password: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string
};


export default Register;
