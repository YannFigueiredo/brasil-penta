import { useState } from 'react';
import '../../styles/partidas.css';

export default function Partidas(){
    const [partidas, setPartidas] = useState([
        {id: 1, timeCasa: 'Brasil', timeFora: 'Turquia', placar: '2-1', fase: 'grupos'},
        {id: 2, timeCasa: 'Brasil', timeFora: 'China', placar: '4-0', fase: 'grupos'},
        {id: 3, timeCasa: 'Costa Rica', timeFora: 'Brasil', placar: '2-5', fase: 'grupos'},
        {id: 4, timeCasa: 'Brasil', timeFora: 'Bélgica', placar: '2-0', fase: 'oitavas'},
        {id: 5, timeCasa: 'Inglaterra', timeFora: 'Brasil', placar: '1-2', fase: 'quartas'},
        {id: 6, timeCasa: 'Brasil', timeFora: 'Turquia', placar: '1-0', fase: 'semifinal'},
        {id: 7, timeCasa: 'Alemanha', timeFora: 'Brasil', placar: '0-2', fase: 'final'}
    ]);

    return(
        <section className="container partidas-copa2002">
            <h1 className="titulo">Caminho até o penta</h1>
            {
                partidas.map(partida => (
                    <article key={partida.id} className="partida-copa2002">
                        <p className="conteudo-principal-partida">{partida.timeCasa} {partida.placar} {partida.timeFora}</p>
                        <p className="conteudo-secundario-partida">Fase: {partida.fase}</p>
                    </article>
                ))
            }
        </section>
    );
}