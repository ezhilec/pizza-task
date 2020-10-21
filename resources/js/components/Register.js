import React from 'react'

class Register extends React.Component {
    render() {
        return (
            <form role="form" method="post" action="register.php">
                <fieldset>
                    <h2>Sign up</h2>
                    <div className="form-group">
                        <input type="text"
                               name="username"
                               id="username"
                               className="form-control input-lg"
                               placeholder="Your name"/>
                    </div>

                    <div className="form-group">
                        <input type="email"
                               name="email"
                               id="email"
                               className="form-control input-lg"
                               placeholder="Email Address"/>
                    </div>
                    <div className="form-group">
                        <input type="password"
                               name="password"
                               id="password"
                               className="form-control input-lg"
                               placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <input type="password"
                               name="password2"
                               id="password2"
                               className="form-control input-lg"
                               placeholder="Password once more time"/>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                            By Clicking register you're agree to our policy & terms
                        </label>
                    </div>
                    <div>
                        <input type="submit"
                               className="btn btn-success"
                               value="Register"/>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default Register;
