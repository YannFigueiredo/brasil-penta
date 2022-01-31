import '../../styles/equipe.css';
import { useContext } from 'react';
import { ElencoContext } from '../../contexts/Elenco';

export default function Equipe(){
    const { jogadores, setJogadores } = useContext(ElencoContext);    

    return(
        <section className="equipe-titular container">
            <h1 className="titulo">Equipe titular</h1>
            <div className="container-jogador">
            {
                jogadores.map(jogador => (
                    <article className="jogador" key={jogador.id}>
                        <div className="foto-jogador">
                            <img src={jogador.foto}/>
                        </div>
                        <div className="identificacao-jogador">
                            <h3 className="identificacao">{jogador.posicao != 'técnico' ? `${jogador.camisa} - ${jogador.nome}` : `${jogador.nome}`}</h3>
                            <p className="posicao">{jogador.posicao}</p>
                        </div>
                    </article>
                ))
            }
            </div>
        </section>
    );
}