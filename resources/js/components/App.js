import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
} from "react-router-dom";
import HeaderContainer from "../containers/HeaderContainer";
import Footer from "./Footer";
import ProductsContainer from "../containers/ProductsContainer";
import CartContainer from "../containers/CartContainer";
import LoginContainer from "../containers/LoginContainer";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import PropTypes from "prop-types";
import Error from "./Error";

class App extends React.Component {
    componentDidMount() {
        this.props.getCart();
    }

    render() {
        return (
            <Router>
                <HeaderContainer/>
                <main className="flex-shrink-0">
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={ProductsContainer}/>
                            <Route path="/delivery" component={Delivery}/>
                            <Route path="/about" component={About}/>
                            <Route path="/cart" component={CartContainer}/>
                            <Route path="/catalog/:slug" component={Product}/>
                            <Route path="/login" component={LoginContainer}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/forgot-password" component={ForgotPassword}/>

                            <PrivateRoute
                                path='/cabinet/orders'
                                isLogged={this.props.isLogged}
                                component={CabinetOrders}/>
                            <PrivateRoute
                                path='/cabinet/user'
                                isLogged={this.props.isLogged}
                                component={CabinetUser}/>

                            <Route path="/*" component={Page404}/>
                        </Switch>
                    </div>
                </main>
                <Footer/>
            </Router>
        );
    }
}

const PrivateRoute = ({component: Component, isLogged, ...rest}) => {
    return (
        <Route {...rest} render={(props) => (
            isLogged ?
                <Component {...props} /> :
                <Redirect to='/login'/>
        )}/>
    )
};

function CabinetOrders() {
    return <h2>CabinetOrders</h2>;
}

function CabinetUser() {
    return <h2>CabinetUser</h2>;
}

function Delivery() {
    return <h2>Delivery</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Product() {
    let {slug} = useParams();
    return <h3>Requested product ID: {slug}</h3>;
}

const Page404 = () => {
    return (
        <div>
            <h3>
                Page not found. <Link to="/">Back to catalog</Link>
            </h3>
        </div>
    );
}

Error.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    getCart: PropTypes.func.isRequired
}

export default App;
