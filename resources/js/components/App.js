import React from "react";
import PropTypes from "prop-types";
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
import RegisterContainer from "../containers/RegisterContainer";
import ForgotPassword from "./ForgotPassword";
import OrderContainer from "../containers/OrderContainer";
import OrdersHistoryContainer from "../containers/OrdersHistoryContainer";
import UserProfileContainer from "../containers/UserProfileContainer";
import Thanks from "./Thanks";

class App extends React.Component {
    componentDidMount() {
        this.props.getCart();
        this.props.getCurrencies();

        if (this.props.isLogged) {
            this.props.getUser();
        }
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
                            <Route path="/register" component={RegisterContainer}/>
                            <Route path="/forgot-password" component={ForgotPassword}/>
                            <Route path="/order" component={OrderContainer}/>
                            <Route path="/thanks" component={Thanks}/>

                            <PrivateRoute
                                path='/cabinet/orders'
                                isLogged={this.props.isLogged}
                                component={OrdersHistoryContainer}/>
                            <PrivateRoute
                                path='/cabinet/profile'
                                isLogged={this.props.isLogged}
                                component={UserProfileContainer}/>

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

App.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    getCart: PropTypes.func.isRequired
}

export default App;
