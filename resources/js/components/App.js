import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import {connect} from 'react-redux'
import Header from "./Header";
import Footer from "./Footer";

function App() {
    return (
        <Router>
            <>
                <Header/>
                <main className="flex-shrink-0">
                    <div className="container">
                        <Switch>
                            <Route path="/delivery">
                                <Delivery/>
                            </Route>
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/cart">
                                <Cart/>
                            </Route>
                            <Route path="/">
                                <Catalog/>
                            </Route>
                        </Switch>
                    </div>
                </main>
                <Footer/>
            </>
        </Router>
    );
}

function Delivery() {
    return <h2>Delivery</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Cart() {
    return <h2>Cart</h2>;
}

function Catalog() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Catalog</h2>

            <ul>
                <li>
                    <Link to={`/pizza1`}>Pizza1</Link>
                </li>
                <li>
                    <Link to={`/pizza2`}>Pizza2</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`/:productId`}>
                    <Product/>
                </Route>
                <Route path={match.path}>
                    <h3>Please select a product.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Product() {
    let {productId} = useParams();
    return <h3>Requested product ID: {productId}</h3>;
}

const mapStateToProps = store => {
    return {
        user: store.user,
        products: store.products,
    }
};

export default connect(mapStateToProps)(App);
