import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Inicio'
import ClientHome from './components/Client/ClientHome';
import ProductHome from './components/Product/ProductHome';
import ClientDetail from './components/Client/ClientDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/" component={Home}/>
        <Route exact path ="/home/clients" component={ClientHome}/>
        <Route exact path ="/home/products" component={ProductHome}/>
        <Route exact path ="/detail/:id" component={ClientDetail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
