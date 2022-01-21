import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import CrearProducto from './components/CrearProducto';
import CrearCategoria from './components/CrearCategoria'
import PanelAdmin from './components/PanelAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="/publicar" element={<CrearProducto/>}/>
        <Route path="/crearcategoria" element={<CrearCategoria/>} />
        <Route path="/paneladmin" element={<PanelAdmin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
