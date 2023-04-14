import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import Contact from './components/contact';
import Home from './components/home';
import NavBarExample from './layouts/navbar';
import Calidad from './components/calidad';
import Farmacovigilancia from './components/farmacovigilancia';
import Tecnovigilancia from './components/tecnovigilancia';
import Mantenimiento from './components/mantenimiento';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Home /> } />
    <Route path='calidad' element={ <Calidad /> } />
    <Route path='farmacovigilancia' element={ <Farmacovigilancia /> } />
    <Route path='tecnovigilancia' element={ <Tecnovigilancia /> } />
    <Route path='mantenimiento' element={ <Mantenimiento /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;
