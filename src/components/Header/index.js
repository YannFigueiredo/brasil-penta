import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-brasil.png';
import Menu from '../../components/Menu';

export default function Header(){
    return(
        <header className="header-principal container">
            <div className="container-logo">
                <div className="logo">
                    <img src={logo} alt="Logo da seleção brasileira de futebol"/>
                </div>
                <Link className="logo-txt" to={'/'}><span>Brasil</span>Penta</Link>
            </div>
            <Menu/>
        </header>
    );
}