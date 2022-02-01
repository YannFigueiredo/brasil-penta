import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { HeaderContext } from '../../contexts/Header';

export default function Menu(){
    const {estadoMenu, setEstado, paginaAtiva, setAtiva} = useContext(HeaderContext);

    useEffect(() => {
        if(paginaAtiva != null){
            if(window.outerWidth < 992 && estadoMenu)
                toggleMenu();
            
            togglePagina();
        }
    }, [paginaAtiva]);

    function toggleMenu(){
        setEstado(!estadoMenu);

        if(estadoMenu){
            document.querySelector('body').style.overflow = 'auto';
        }else{
            document.querySelector('body').style.overflow = 'hidden';
        }
    }

    function togglePagina(){
        let paginas = document.querySelectorAll('.menu-header li');

        paginas.forEach(pagina => {
            if(pagina.querySelector('a').classList.contains('item-ativo')){
                pagina.querySelector('a').classList.remove('item-ativo');
            }
        });

        document.querySelector(`.menu-header li:nth-child(${paginaAtiva}) a`).classList.add('item-ativo');
    }

    return(
        <div>
            <nav>
                <ul className={estadoMenu ? "menu-header" : "menu-header menu-fechado"}>
                    <li><Link onClick={() => {setAtiva(1)}} to={'/'}>Home</Link></li>
                    <li><Link onClick={() => {setAtiva(2)}} to={'/partidas'}>Partidas</Link></li>
                    <li><Link onClick={() => {setAtiva(3)}} to={'/equipe'}>Equipe</Link></li>
                    <li><Link onClick={() => {setAtiva(4)}} to={'/momentos'}>Momentos</Link></li>
                </ul>
            </nav>
            <i onClick={toggleMenu} className={estadoMenu ? "fas fa-times btn-menu-aberto" : "fas fa-bars btn-menu"}></i>
        </div>
    );
}