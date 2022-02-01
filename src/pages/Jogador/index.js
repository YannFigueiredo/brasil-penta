import { useContext } from 'react';
import { ElencoContext } from '../../contexts/Elenco';
import { useParams } from 'react-router-dom';

export default function Jogador(){
    const { jogadores } = useContext(ElencoContext);
    const { id } = useParams();
    var jogador = jogadores.filter(item => {
        return item.id === parseInt(id); 
    });
    var outrosJogadores = jogadores.filter(item => {
        return item.id != parseInt(id);
    });

    return(
        <section className="detalhes-jogador">
            {
                <div>
                    <article className="jogador-selecionado">
                        <header>
                            <h1 className="nome">{jogador[0].nome}</h1>
                            <div className="estatisticas">
                                <p>Partidas: | Gols: </p>
                            </div>
                            <div className="foto">
                                <img src={jogador[0].foto}/>
                            </div>
                        </header>
                        <div className="biografia">
                            <h3>Biografia</h3>
                            <p>ipsum lapirum latua a,mfdo0mofmo0mfoemifkmwieomfiomwseofmiksmfoikmoekismfokimewsokmfomeowsfowesmofmoefmrokqmo0rkw0ork0wkr0k3r0k23r0ok32o0rko230rk0o23k0k320ork0okerofmmfkmdsk</p>
                        </div>
                    </article>
                </div>
            }
        </section>
    );
}