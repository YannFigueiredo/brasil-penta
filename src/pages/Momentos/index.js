import { useState } from 'react';
import '../../styles/momentos.css';
import gol2ronaldo from '../../assets/img/momentos/2gol-ronaldo-final.jpeg';
import golfaltaronaldinho from '../../assets/img/momentos/gol-falta-ronaldinho.jpg';
import cafutrofeu from '../../assets/img/momentos/cafu-trofeu.jpeg';
import denilsondrible from '../../assets/img/momentos/denilsondriblando.jpg';

export default function Momentos(){
    const [momentos, setMomentos] = useState([
        {id: 1, titulo: 'Ronaldinho marca um golaço de falta contra a Inglaterra', data: '21 jun 2002', capa: golfaltaronaldinho, video: 'https://www.youtube.com/watch?v=7hcFmS1KvRg'},
        {id: 2, titulo: 'Denilson perseguido por grupo de jogadores turcos', data: '26 jun 2002', capa: denilsondrible, video: 'https://www.youtube.com/watch?v=y8mMmw0AQus'},
        {id: 3, titulo: 'Ronaldo marca o gol do título', data: '30 jun 2002', capa: gol2ronaldo, video: 'https://www.youtube.com/watch?v=22ocrZjEkJU'},
        {id: 4, titulo: 'Cafú levanta a taça da copa', data: '30 jun 2002', capa: cafutrofeu, video: 'https://www.youtube.com/watch?v=AzXYGdyfV4o'}
    ]);
    
    return(
        <section className="momentos container">
            <h1 className="titulo">Grandes momentos da copa de 2002</h1>
            <div className="container-momentos">
                {
                    momentos.map(momento => (
                        <a href={momento.video} target="blank">
                            <article key={momento.id} className="momento">
                                <span className="data-momento">{momento.data}</span>
                                <div className="capa-momento">
                                    <img src={momento.capa}/>
                                </div>
                                <h3 className="titulo-momento">{momento.titulo}</h3>
                            </article>
                        </a>
                    ))
                }
            </div>
        </section>
    );
}