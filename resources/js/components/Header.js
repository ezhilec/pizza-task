import React from 'react'
import {Link, useRouteMatch} from "react-router-dom";
import PropTypes from "prop-types";
import CurrencySelectContainer from "../containers/CurrencySelectContainer";
import UserMenu from "./UserMenu";

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src="/images/logo.png" alt=""/>
                            Pizza task
                        </Link>
                        <button className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                                aria-controls="navbarCollapse"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto mb-2 mb-md-0">
                                <NavLi
                                    activeOnlyWhenExact={true}
                                    to="/"
                                    label="Catalog"
                                />
                                <NavLi to="/delivery" label="Delivery"/>
                                <NavLi to="/about" label="About"/>
                            </ul>
                        </div>

                        <div className="header-right-actions d-flex">
                            <CurrencySelectContainer/>

                            <Link to="/cart"
                                  className="cart-button btn btn-outline-light mr-4 d-flex">
                                <img src="/images/shopping-cart.svg" className={'mr-1'} alt=""/>
                                Cart
                                <span className="badge rounded-pill bg-success ml-1">
                                    {this.props.cartCount}
                                </span>
                            </Link>

                            {this.props.isLogged ?
                                <UserMenu
                                    submitLogout={this.props.submitLogout}/> :
                                <Link
                                    to="/login"
                                    className="btn btn-success">
                                    Login
                                </Link>
                            }
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

const NavLi = ({label, to, activeOnlyWhenExact}) => {
    const match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <li className={match ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to={to}>{label}</Link>
        </li>
    );
}

Header.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    cartCount: PropTypes.number.isRequired,
    submitLogout: PropTypes.func.isRequired,
};


export default Header;
