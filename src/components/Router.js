import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./Products";
import AboutUs from "./AboutUs";
import Error from "./Error";
import Header from "./Header";
import ProductDetail from "./ProductDetail";
import infoProduct from "../data/data.json";

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
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Products products={this.state.products} />}
          />
          <Route exact path="/nosotros" component={AboutUs} />
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
