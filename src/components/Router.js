import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Error from "./Error";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/nosotros" component={AboutUs} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
