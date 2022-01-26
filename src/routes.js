import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Partidas from './pages/Partidas';
import Equipe from './pages/Equipe';
import Momentos from './pages/Momentos';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/partidas' element={<Partidas/>}/>
                <Route path='/equipe' element={<Equipe/>}/>
                <Route path='/momentos' element={<Momentos/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;