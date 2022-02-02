import { useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ElencoContext } from '../../contexts/Elenco';
import './slide.css';

export default function Slide(props){
    const { jogadores } = useContext(ElencoContext);
    const navigate = useNavigate();
    const jogadorSlide = useRef(null);
    const dots = useRef(null);
    var qtdeDots;
    const { id } = props.id;
    var outrosJogadores = jogadores.filter(item => {
        return item.id !== parseInt(id);
    });

    useEffect(() => {
        qtdeDots = jogadorSlide.current.scrollWidth/jogadorSlide.current.offsetWidth;

        criarDots();
    }, [])

    const voltarSlide = (e) => {
        e.preventDefault();

        jogadorSlide.current.scrollLeft -= jogadorSlide.outerWidth; 
    };

    const avancarSlide = (e) => {
        e.preventDefault();

        jogadorSlide.current.scrollLeft += jogadorSlide.current.offsetWidth;
    }

    window.addEventListener('resize', () => {
        qtdeDots = jogadorSlide.current.scrollWidth/jogadorSlide.current.offsetWidth;

        criarDots();
    });

    function criarDots(){
        for(var i = 0; i < qtdeDots; i++){
            var div = document.createElement('div');
            div.classList.add(i);
            dots.current.appendChild(div);
        }
    }

    return(
        <section className="slide-jogadores container">
            <h1 className="titulo"> Outros jogadores</h1>
            <hr className="divisoria"/>
            <div className="container-jogador-slide" ref={jogadorSlide}>
            {
                outrosJogadores.map(jogador => (
                    <article key={jogador.id} className="jogador-slide" onClick={() => {navigate(`/equipe/${jogador.id}`)}}>
                        <div className="foto">
                            <img src={jogador.foto} alt={jogador.nome}/>
                        </div>
                        <h3 className="nome">{jogador.posicao !== 'técnico' ? `${jogador.camisa} . ${jogador.nome}` : `${jogador.nome}`}</h3>
                        <p className="posicao">{jogador.posicao}</p>
                    </article>
                ))
            }
            </div>
            <div className="dots" ref={dots}></div>
            <div className="controladores-slide">
                <i className="fas fa-arrow-left btn-anterior" onClick={voltarSlide}></i>
                <i className="fas fa-arrow-right btn-proximo" onClick={avancarSlide}></i>
            </div>
        </section>
    );
}