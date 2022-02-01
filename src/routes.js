import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Partidas from './pages/Partidas';
import Equipe from './pages/Equipe';
import Jogador from './pages/Jogador';
import Momentos from './pages/Momentos';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/partidas' element={<Partidas/>}/>
                <Route path='/equipe' element={<Equipe/>}/>
                <Route path='/equipe/:id' element={<Jogador/>}/>
                <Route path='/momentos' element={<Momentos/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default Rotas;