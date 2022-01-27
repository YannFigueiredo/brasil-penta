import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-brasil.png';

export default function Header(){
    return(
        <header className="header-principal container">
            <div className="container-logo">
                <div className="logo">
                    <img src={logo} alt="Logo da seleção brasileira de futebol"/>
                </div>
                <Link className="logo-txt" to={'/'}><span>Brasil</span>Penta</Link>
            </div>
            <nav>
                <ul className="menu-header">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/partidas'}>Partidas</Link></li>
                    <li><Link to={'/equipe'}>Equipe</Link></li>
                    <li><Link to={'/momentos'}>Momentos</Link></li>
                </ul>
            </nav>
            {/*botão menu*/}
        </header>
    );
}