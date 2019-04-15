import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";
import infoProduct from "../data/data.json";
import Products from "../pages/Products";
import AboutUs from "../pages/AboutUs";
import Error from "../pages/Error";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail";

class Router extends Component {
  state = {
    products: []
  };

  componentWillMount() {
    this.setState({
      products: infoProduct
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Products products={this.state.products} />}
          />
          <Route exact path="/nosotros" component={AboutUs} />
          <Route exact path="/contacto" component={Contact} />
          <Route
            exact
            path="/productos"
            render={() => <Products products={this.state.products} />}
          />
          <Route
            exact
            path="/producto/:productId"
            render={props => {
              console.log(props);
              let idProducto = props.match.params.productId;
              return (
                <ProductDetail product={this.state.products[idProducto]} />
              );
            }}
          />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
