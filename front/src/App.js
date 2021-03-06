import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Details from './components/Details';
import CrearProducto from './components/CrearProducto';
import CrearCategoria from './components/CrearCategoria'
import PanelAdmin from './components/PanelAdmin';
import Direccion from './components/Direccion';
import Redes from './components/Redes';
import ManageProducts from './components/ManageProducts';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/publicar" element={<CrearProducto/>}/>
        <Route path="/crearcategoria" element={<CrearCategoria/>} />
        <Route path="/paneladmin" element={<PanelAdmin/>}/>
        <Route path="/administrarproductos" element={<ManageProducts/>}/>
        <Route path="/direccion" element={<Direccion/>}/>
        <Route path="/redes" element={<Redes/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
