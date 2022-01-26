import '../../styles/home.css';
import fotoRonaldo from '../../assets/img/ronaldo-heroi-penta.jpg';

export default function Home(){
    return(
        <div>
            <section className="introducao-home container">
                <h1 className="txt-principal-home titulo">Seleção pentacampeã</h1>
                <a className="btn btn-verde btn-assistirfinal">Assista a final</a>
            </section>
            <section className="heroi-penta container">
                <div className="container-artigo-heroipenta">
                    <div className="foto-heroipenta">
                        <img src={fotoRonaldo} alt="Ronaldo Fenômeno"/>
                    </div>
                    <div className="txt-heroipenta">
                        <h1 class="titulo">Ronaldo Fenômeno</h1>
                        <h2 class="subtitulo">O herói do penta</h2>
                        <p>Na etapa final, Ronaldo apareceu e garantiu o pentacampeonato para a Seleção Brasileira. Com 22 minutos, o Fenômeno pegou o rebote de Kahn, após o chute de Rivaldo, e abriu o placar. Aos 34 minutos, Kleberson apareceu mais uma vez pela direita, cruzou rasteiro, e Rivaldo fez um lindo corta-luz. Ronaldo finalizou da entrada da área, no cantinho de Oliver Kahn, e deu números finais à partida do pentacampeonato da Seleção.</p>
                    </div>
                </div>
                <div className="numeros-heroipenta">
                        <div className="partidas-jogadas">
                            <span><i>7</i></span>
                            <strong>partidas jogadas</strong>
                        </div>
                        <div className="gols-marcados">
                            <span><i>8</i></span>
                            <strong>gols marcados</strong>
                        </div>
                    </div>
            </section>
        </div>
    );
}