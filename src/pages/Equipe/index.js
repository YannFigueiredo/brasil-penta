import { useState } from 'react';
import '../../styles/equipe.css';

export default function Equipe(){
    const [jogadores, setJogadores] = useState([
        {id: 1, nome: 'Marcos', camisa: '01', posicao: 'goleiro', foto: '../../assets/img/jogadores/1-marcos.jpg'}
    ]);
    
    return(
        <section className="equipe-titular container">
            <h1 className="titulo">Equipe titular</h1>
            {
                jogadores.map(jogador => (
                    <article key={jogador.id}>
                        <div className="foto-jogador">
                            <img src={jogador.foto}/>
                        </div>
                        <div className="identificacao-jogador">
                            <h3>{jogador.camisa} - {jogador.nome}</h3>
                            <p>{jogador.posicao}</p>
                        </div>
                    </article>
                ))
            }
        </section>
    );
}