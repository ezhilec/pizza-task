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
import ProductsContainer from "../containers/ProductsContainer";

function App() {
    return (
        <Router>
            <>
                <Header/>
                <main className="flex-shrink-0">
                    <div className="container">
                        <Switch>
                            <Route exact path="/">
                                <Products/>
                            </Route>
                            <Route path="/delivery">
                                <Delivery/>
                            </Route>
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/cart">
                                <Cart/>
                            </Route>
                            <Route path="/catalog/:slug">
                                <Product/>
                            </Route>
                            <Route path="/*">
                                <Page404 />
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

function Products() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Catalog</h2>
            <ProductsContainer/>
        </div>
    );
}

function Product() {
    let {slug} = useParams();
    return <h3>Requested product ID: {slug}</h3>;
}

function Page404() {


    return (
        <div>
            <h3>
                Page not found. <Link to="/">Back to catalog</Link>
            </h3>
        </div>
    );
}

const mapStateToProps = store => {
    return {
        user: store.user,
        products: store.products,
    }
};

export default connect(mapStateToProps)(App);
