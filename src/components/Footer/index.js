import { Link } from 'react-router-dom';
import './footer.css';
import { useContext } from 'react';
import { HeaderContext } from '../../contexts/Header';

export default function Footer(){
    const { setAtiva } = useContext(HeaderContext);

    return(
        <footer className="footer-principal">
            <ul className="menu-footer">
                <li><Link onClick={() => {setAtiva(1)}} to={'/'}>Home</Link></li>
                <li><Link onClick={() => {setAtiva(2)}} to={'/partidas'}>Partidas</Link></li>
                <li><Link onClick={() => {setAtiva(3)}} to={'/equipe'}>Equipe</Link></li>
                <li><Link onClick={() => {setAtiva(4)}} to={'/momentos'}>Momentos</Link></li>
            </ul>
        </footer>
    );
}