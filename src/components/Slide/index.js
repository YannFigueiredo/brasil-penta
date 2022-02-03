import { useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ElencoContext } from '../../contexts/Elenco';
import './slide.css';

export default function Slide({ id }){
    const { jogadores } = useContext(ElencoContext);
    const navigate = useNavigate();
    const jogadorSlide = useRef(null);
    const dots = useRef(null);
    var dotAtual = 0;
    var qtdeDots;
    var outrosJogadores = jogadores.filter(item => {
        return item.id !== parseInt(id);
    });

    useEffect(() => {
        qtdeDots = jogadorSlide.current.scrollWidth/jogadorSlide.current.offsetWidth;

        criarDots();

        definirDotInicial();

        window.addEventListener('resize', () => {
            qtdeDots = Math.ceil(jogadorSlide.current.scrollWidth/jogadorSlide.current.offsetWidth);

            criarDots();

            definirDotInicial();

            criarEventosDots();

            criarEventoTouch();
        });

        criarEventosDots();

        criarEventoTouch();
    }, []);

    const voltarSlide = (e) => {
        e.preventDefault();

        jogadorSlide.current.scrollLeft -= jogadorSlide.current.offsetWidth; 

        if(dotAtual - 1 >= 0){
            dotAtual -= 1;
            definirDotAtiva();
        }
    };

    const avancarSlide = (e) => {
        e.preventDefault();

        jogadorSlide.current.scrollLeft += jogadorSlide.current.offsetWidth;

        if(dotAtual + 1 < qtdeDots){
            dotAtual += 1;
            definirDotAtiva();
        }
    }

    function criarDots(){
        dots.current.textContent = '';

        for(var i = 0; i < qtdeDots; i++){
            var div = document.createElement('div');
            div.classList.add(i);
            dots.current.appendChild(div);
        }
    }

    function definirDotInicial(){
        dotAtual = Math.ceil(jogadorSlide.current.scrollLeft/jogadorSlide.current.offsetWidth);

        definirDotAtiva();
    }

    function definirDotAtiva(){
        for(var i = 0; i < qtdeDots; i++){
            document.querySelector(`.dots div:nth-child(${i+1})`).classList.remove('ativo');
        }

        document.querySelector(`.dots div:nth-child(${dotAtual+1})`).classList.add('ativo');
    }

    function criarEventosDots(){
        dots.current.querySelectorAll('div').forEach(dot => {
            dot.addEventListener('click', function(e){
                jogadorSlide.current.scrollLeft = e.target.classList[0] * jogadorSlide.current.offsetWidth;
                dotAtual = parseInt(e.target.classList[0]);
                definirDotAtiva();
            });
        });
    }

    function criarEventoTouch(){
        jogadorSlide.current.addEventListener('scroll', function(e){
            definirDotInicial();
        });
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