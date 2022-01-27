import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Partidas from './pages/Partidas';
import Equipe from './pages/Equipe';
import Momentos from './pages/Momentos';
import Header from './components/Header';
import NotFound from './pages/NotFound';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/partidas' element={<Partidas/>}/>
                <Route path='/equipe' element={<Equipe/>}/>
                <Route path='/momentos' element={<Momentos/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;