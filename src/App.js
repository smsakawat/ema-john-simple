import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./componenets/Header/Header";
import Inventory from "./componenets/Invertory/Invetory";
import Login from "./componenets/Login/Login";
import NotFound from "./componenets/NotFound/NotFound";
import OrderReview from "./componenets/OrderReview/OrderReview";
import PlaceOrder from "./componenets/PlaceOrder/PlaceOrder";
import PrivateRoute from "./componenets/PrivaRoute/PrivateRoute";
import Register from "./componenets/Register/Register";
import Shipping from "./componenets/Shipping/Shipping";
import Showcase from "./componenets/Showcase/Showcase";
import AuthProvider from "./Context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Showcase></Showcase>
          </Route>
          <Route exact path="/shop">
            <Showcase></Showcase>
          </Route>
          <Route exact path="/order-review">
            <OrderReview></OrderReview>
          </Route>
          <Route exact path="/inventory">
            <Inventory></Inventory>
          </Route>
          <PrivateRoute path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/shipping">
           <Shipping></Shipping>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
