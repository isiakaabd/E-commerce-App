
import './App.css';
// import MyApp from "./Components/paypal"
import React from "react"
import Navbar from "./Components/Navbar"
import ProductList from "./Components/ProductList"
import Cart from "./Components/cart/Cart";
import Default from './Components/Default';
import { Switch, Route } from "react-router-dom";
import Details from "./Components/Details";
import Modal from "./Components/Modal";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (

    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />

    </React.Fragment>
  )
}

export default App;
