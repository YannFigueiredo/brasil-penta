import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer(){
    return(
        <footer className="footer-principal">
            <ul className="menu-footer">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/partidas'}>Partidas</Link></li>
                <li><Link to={'/equipe'}>Equipe</Link></li>
                <li><Link to={'/momentos'}>Momentos</Link></li>
            </ul>
        </footer>
    );
}