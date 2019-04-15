import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from "./Products";
import AboutUs from "./AboutUs";
import Error from "./Error";
import Header from "./Header";
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
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
