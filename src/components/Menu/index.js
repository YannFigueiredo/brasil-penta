import { Link } from 'react-router-dom';

export default function Menu(){
    (function(){
        const btnMenu = document.querySelector('.btn-menu');
        const containerMenu = document.querySelector('menu-header');
    
        btnMenu.addEventListener('click', () => {
            alert('oiii');
        });
    }());

    return(
        <div>
            <nav>
                <ul className="menu-header menu-fechado">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/partidas'}>Partidas</Link></li>
                    <li><Link to={'/equipe'}>Equipe</Link></li>
                    <li><Link to={'/momentos'}>Momentos</Link></li>
                </ul>
            </nav>
            <i className="fas fa-bars btn-menu"></i>
        </div>
    );
}