import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Inicio'
import ClientHome from './components/Client/ClientHome';
import ProductHome from './components/Product/ProductHome';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/home" component={Home}/>
        <Route exact path ="/home/clients" component={ClientHome}/>
        <Route exact path ="/home/products" component={ProductHome}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
