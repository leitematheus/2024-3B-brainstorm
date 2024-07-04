const caixaPrincipal = document.querySelectorAll('.caixa-principal')
const caixaPerguntas = document.querySelectorAll('.caixa-perguntas')
const caixaAlternativas = document.querySelectorAll('.caixa-alternativas')
const caixaResultado = document.querySelectorAll('.caixa-resultado')
const textoResultado = document.querySelectorAll('.texto-resultado')
const perguntas = [
    {
        enunciado: 'Paulo tem 17 anos de idade, e pensando sobre qual carreira seguir, ele para pensar o que ele faz de melhor e gosta de fazer.<br>Nisso lhe vem duas opcões em sua cabeça:',
        alternativas: [
            'Ele escolhe fazer ciência da computação, e ganhar razoavelmente, mas que futuramente pode melhora.',
            'Ele escolhe um emprego que ganha muito mais que ciência da computação, mas não gosta da área.'
        ]
    },
    {
        enunciado: 'Pergunta2',
        alternativas: [
            'alternativa 1',
            'alternativa 2'
        ]
    },
    {
        enunciado: 'Pergunta3',
        alternativas: [
            'alternativa 1',
            'alternativa 2'
        ]
    },
    {
        enunciado: 'Pergunta4',
        alternativas: [
            'alternativa 1',
            'alternativa 2'
        ]
    },
    {
        enunciado: 'Pergunta5',
        alternativas: [
            'alternativa 1',
            'alternativa 2'
        ]
    }
]

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;  
}
mostraAlternativas();

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElmeent("button")
        botaoAlternativas.textContent = alternativas;
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}