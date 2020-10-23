import React from 'react'
import {Link} from "react-router-dom";

class UserMenu extends React.Component {
    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-success dropdown-toggle"
                        type="button"
                        id="userMenuButton"
                        data-toggle="dropdown"
                        aria-expanded="false">
                    Cabinet
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                        <Link
                            to="/cabinet/orders"
                            className="dropdown-item">
                            My orders
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/cabinet/profile"
                            className="dropdown-item">
                            My profile
                        </Link>
                    </li>
                    <li>
                        <a className="dropdown-item"
                           href={"#"}
                           onClick={() => this.props.submitLogout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>


        );
    }
}

export default UserMenu;
