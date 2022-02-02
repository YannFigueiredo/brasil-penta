import { createElement, useContext, useRef, useEffect } from 'react';
import { ElencoContext } from '../../contexts/Elenco';
import { useParams } from 'react-router-dom';
import '../../styles/jogador.css';
import Slide from '../../components/Slide';

export default function Jogador(){
    const { jogadores } = useContext(ElencoContext);
    const { id } = useParams();
    var jogador = jogadores.filter(item => {
        return item.id === parseInt(id); 
    });
    
    return(
        <div className="detalhes-jogador">
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
            <Slide id={id}/>
        </div>
    );
}