import React from 'react'

class ForgotPassword extends React.Component {
    render() {
        return (
            <form role="form">
                <fieldset>
                    <h2>Forgot password?</h2>

                    <div className="form-group">
                        <input type="email"
                               name="username"
                               id="username"
                               className="form-control input-lg"
                               placeholder="username"/>
                    </div>
                    <div>
                        <input type="submit"
                               className="btn btn-success"
                               value="Send me password"/>
                    </div>

                </fieldset>
            </form>
        );
    }
}

export default ForgotPassword;
