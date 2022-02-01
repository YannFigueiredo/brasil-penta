import { useState, createContext } from 'react';
import marcos01 from '../assets/img/jogadores/1-marcos.jpg';
import cafu02 from '../assets/img/jogadores/2-cafu.jpg';
import lucio03 from '../assets/img/jogadores/3-lucio.jpg';
import roque04 from '../assets/img/jogadores/4-roquejr.jpg';
import edmilson05 from '../assets/img/jogadores/5-edmilson.jpg';
import rcarlos06 from '../assets/img/jogadores/6-robertocarlos.jpg';
import gilberto08 from '../assets/img/jogadores/8-gilbertosilva.jpg';
import ronaldo09 from '../assets/img/jogadores/9-ronaldo.jpg';
import rivaldo10 from '../assets/img/jogadores/10-rivaldo.jpg';
import ronaldinho11 from '../assets/img/jogadores/11-ronaldinho.jpg';
import kleberson15 from '../assets/img/jogadores/15-kleberson.jpg';
import tecfelipao from '../assets/img/jogadores/tec-felipao.jpg';

export const ElencoContext = createContext({});

export default function ElencoProvider({children}){
    const [jogadores, setJogadores] = useState([
        {id: 1, nome: 'Marcos', camisa: '01', posicao: 'goleiro', foto: marcos01, partidas: '', gols: '', biografia: ''},
        {id: 2, nome: 'Cafu', camisa: '02', posicao: 'lateral', foto: cafu02, partidas: '', gols: '', biografia: ''},
        {id: 3, nome: 'Lúcio', camisa: '03', posicao: 'zagueiro', foto: lucio03, partidas: '', gols: '', biografia: ''},
        {id: 4, nome: 'Roque Júnior', camisa: '04', posicao: 'zagueiro', foto: roque04, partidas: '', gols: '', biografia: ''},
        {id: 5, nome: 'Edmilson', camisa: '05', posicao: 'zagueiro', foto: edmilson05, partidas: '', gols: '', biografia: ''},
        {id: 6, nome: 'Roberto Carlos', camisa: '06', posicao: 'lateral', foto: rcarlos06, partidas: '', gols: '', biografia: ''},
        {id: 7, nome: 'Gilberto Silva', camisa: '08', posicao: 'volante', foto: gilberto08, partidas: '', gols: '', biografia: ''},
        {id: 8, nome: 'Ronaldo', camisa: '09', posicao: 'atacante', foto: ronaldo09, partidas: '', gols: '', biografia: ''},
        {id: 9, nome: 'Rivaldo', camisa: '10', posicao: 'atacante', foto: rivaldo10, partidas: '', gols: '', biografia: ''},
        {id: 10, nome: 'Ronaldinho', camisa: '11', posicao: 'meia', foto: ronaldinho11, partidas: '', gols: '', biografia: ''},
        {id: 11, nome: 'Kleberson', camisa: '15', posicao: 'volante', foto: kleberson15, partidas: '', gols: '', biografia: ''},
        {id: 12, nome: 'Luiz Felipe Scolari', camisa: '', posicao: 'técnico', foto: tecfelipao, partidas: '', gols: '', biografia: ''}
    ]);

    return(
        <ElencoContext.Provider value={{jogadores, setJogadores}}>
            {children}
        </ElencoContext.Provider>
    );
}