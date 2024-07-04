const caixaPrincipal = document.querySelectorAll('.caixa-principal')
const caixaPerguntas = document.querySelectorAll('.caixa-perguntas')
const caixaAlternativas = document.querySelectorAll('.caixa-alternativas')
const caixaResultado = document.querySelectorAll('.caixa-resultado')
const textoResultado = document.querySelectorAll('.texto-resultado')
const perguntas = [
    {
        enunciado: 'Nome, mora em Foz do Iguaçu, que é mundialmente conhecido pelas Cataratas, e nome sabe a importância de preservar a água ainda mais em sua cidade, por ser um lugar turístico relacionado a água, nisso nome decide:',
        alternativas: [
            'Nome escolhe estudar para futuramente trabalhar na Itaipu, e preservar a água e fornecer para o seu país e o país vizinho!',
            'Nome pensa que não é quaificado(a) para este trabalho, e achar melhor deixar na mão de outra pessoa o seu futuro e o da água.'
        ]
    },
    {
        enunciado: 'Nome começa a trabalhar na Itaipu, e lá surge uma oportunidade exelente para cuidar da qualidade da água do lago da Itaipu, nome aproveita essa oportunidade?',
        alternativas: [
            'Sim, pois esse é o seu sonho e você se ver responsável em preservar a água da sua cidade.',
            'Não quer esse cargo, pois o seu salário já está ótimo assim e não quer saber mais de preservar a água, porque a sua condição financeira subiu à cabeça.'
        ]
    },
    {
        enunciado: 'Nome começa a cuidar do lago da Itaipu e lá descobre um novo tipo de bactéria presnte na água, o que nome deve fazer?',
        alternativas: [
            'Nome decide não avisar, pois pensa que deve ser uma bactéria inofensiva e não causará nenhum mal',
            'Nome avisa aos supervisores, e começa a trabalhar como chefe de outros cientistas, contra essa nova bactéria.'
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