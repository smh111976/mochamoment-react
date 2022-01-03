import React, { Component } from 'react';
import Header from './components/HeaderComponent';
import ProductMenu from './components/ProductMenuComponent';
import Footer from './components/FooterComponent';
import { PRODUCTS } from './shared/products';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/HomeComponent';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: PRODUCTS };
  }
  render() {
    const HomePage = () => {
      return <Home />;
    };
    return (
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Switch>
            <Route path='/home' component={HomePage} />
            <Route
              exact
              path='/productmenu'
              render={() => <ProductMenu products={this.state.products} />}
            />
            <Redirect to='/home' />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
