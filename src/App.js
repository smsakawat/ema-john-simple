import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './componenets/Header/Header';
import Inventory from './componenets/Invertory/Invetory';
import NotFound from './componenets/NotFound/NotFound';
import OrderReview from './componenets/OrderReview/OrderReview';
import PlaceOrder from './componenets/PlaceOrder/PlaceOrder';
import Showcase from './componenets/Showcase/Showcase';





function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Showcase></Showcase>
          </Route>
          <Route exact path='/shop'>
            <Showcase></Showcase>
          </Route>
          <Route exact path='/order-review'>
            <OrderReview></OrderReview>
          </Route>
          <Route exact path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route path='/placeorder'>
            <PlaceOrder></PlaceOrder>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
