const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que caracteriza uma comunidade virtual?",
        alternativas: [
            "Um grupo de pessoas que se encontram fisicamente em um local específico.",
            "Um grupo  de indivíduos que se compartilham interreses comuns e interagem atráves de plataformas digitais.",
        ]
    },
    {
        enunciado: "Quais são os benefícios das comunidades virtuais?",
        alternativas: [
            "Aumento do isolamento social.",
            "Oportunidades de aprender com outras pessoas e compartilhar experiências.",
        ]
    },
    {
        enunciado: "Qual das seguintes opções é um exemplo de acessibilidade digital?",
        alternativas: [
            "O uso de rampas em edifícios.",
            "A disponibilização de legendas em vídeos online.",
        ]
    },
    {
        enunciado: "Quais são as barreiras que podem dificultar a acessibilidade?",
        alternativas: [
            "Barreiras físicas, comunicacionais e atitudinais",
            "Barreiras culturais e sociais",
        ]
    },
    ];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();