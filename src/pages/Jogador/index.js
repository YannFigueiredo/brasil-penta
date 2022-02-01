import { useContext, useRef } from 'react';
import { ElencoContext } from '../../contexts/Elenco';
import { useParams, useNavigate } from 'react-router-dom';
import '../../styles/jogador.css';

export default function Jogador(){
    const { jogadores } = useContext(ElencoContext);
    const { id } = useParams();
    const navigate = useNavigate();
    const jogadorSlide = useRef(null);
    var jogador = jogadores.filter(item => {
        return item.id === parseInt(id); 
    });
    var outrosJogadores = jogadores.filter(item => {
        return item.id !== parseInt(id);
    });

    const voltarSlide = (e) => {
        e.preventDefault();

        jogadorSlide.current.scrollLeft -= jogadorSlide.current.offsetWidth; 
    };

    const avancarSlide = (e) => {
        e.preventDefault();

        jogadorSlide.current.scrollLeft += jogadorSlide.current.offsetWidth;
    }
    
    return(
        <div className="detalhes-jogador">
            {
                <div>
                    <section className="jogador-selecionado">
                        <header className="container">
                            <h1 className="nome">{jogador[0].posicao !== 'técnico' ? `${jogador[0].camisa} . ${jogador[0].nome}` : `${jogador[0].nome}`}</h1>
                            <div className="estatisticas">
                                <p><span>Partidas: </span>{jogador[0].partidas} <span>|</span> <span>Gols: </span>{jogador[0].gols}</p>
                            </div>
                        </header>
                        <div className="container-main">
                            <div className="informacoes container">
                                <div className="foto">
                                    <img src={jogador[0].foto} alt={jogador[0].nome}/>
                                </div>
                                <div className="dados">
                                    <p><span>Posição: </span>{jogador[0].posicao}</p>
                                    <p><span>Número: </span>{jogador[0].camisa}</p>
                                </div>
                            </div>
                            <div className="biografia container">
                                <h2>Biografia</h2>
                                <p>{jogador[0].biografia}</p>
                            </div>
                        </div>
                    </section>
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
                        <div className="controladores-slide">
                            <i className="fas fa-arrow-left btn-anterior" onClick={voltarSlide}></i>
                            <i className="fas fa-arrow-right btn-proximo" onClick={avancarSlide}></i>
                        </div>
                        <div className="dots"></div>
                    </section>
                </div>
            }
        </div>
    );
}