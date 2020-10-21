import React from 'react'
import Loading from "./Loading";
import Error from "./Error";
import PropTypes from "prop-types";
import {Products} from "./Products";

export class Login extends React.Component {

    handleChange = e => {
        this.props.onChangeField(e.target.name, e.target.value)
    };

    handleSubmit= e => {
        this.props.submitLogin({
            email: this.props.email,
            password: this.props.password
        });
    };

    render() {
        return (

            <div className={"col-md-4 ml-auto mr-auto"}>
                <div className={'card p-3'}>
                    <h2>Login</h2>

                    {this.props.error &&
                    <Error message={this.props.error}/>}

                    <div className={"mb-3"}>
                        <input type="email"
                               name="email"
                               id="email"
                               className="form-control input-lg"
                               placeholder="Email"
                               value={this.props.email}
                               onChange={this.handleChange}/>
                    </div>
                    <div className={"mb-3"}>
                        <input type="password"
                               name="password" id="password"
                               className="form-control input-lg"
                               placeholder="Password"
                               value={this.props.password}
                               onChange={this.handleChange}/>
                    </div>
                    {this.props.isLoading ?
                        <Loading/> :
                        <div>
                            <input type="submit"
                                   className="btn btn-success"
                                   value="Sign In"
                                   onClick={this.handleSubmit}/>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    submitLogin: PropTypes.func.isRequired
};
