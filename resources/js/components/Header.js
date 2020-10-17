import React from 'react'
import {Link, useRouteMatch} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Fixed navbar</a>
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
                                <NavLi to="/delivery" label="Delivery" />
                                <NavLi to="/about" label="About" />
                                <NavLi to="/cart" label="Cart" />
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

function NavLi({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
        path: to,
        exact: activeOnlyWhenExact
    });

    return (
        <li className={match ? "nav-item active" : "nav-item"}>
            <Link className="nav-link" to={to}>{label}</Link>
        </li>
    );
}

export default Header;
