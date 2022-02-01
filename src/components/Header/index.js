import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo-brasil.png';
import Menu from '../../components/Menu';
import { useContext } from 'react';
import { HeaderContext } from '../../contexts/Header';

export default function Header(){
    const {setAtiva} = useContext(HeaderContext);

    /*window.addEventListener('load', () => {
        alert('oii');
    });*/

    return(
        <header className="header-principal container">
            <div className="container-logo">
                <div className="logo">
                    <img src={logo} alt="Logo da seleção brasileira de futebol"/>
                </div>
                <Link onClick={() => {setAtiva(1)}} className="logo-txt" to={'/'}><span>Brasil</span>Penta</Link>
            </div>
            <Menu/>
        </header>
    );
}