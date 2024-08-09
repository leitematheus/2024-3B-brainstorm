const caixaPrincipal = document.querySelector('.caixa-principal')
const caixaPerguntas = document.querySelector('.caixa-perguntas')
const caixaAlternativas = document.querySelector('.caixa-alternativas')
const caixaResultado = document.querySelector('.caixa-resultado')
const textoResultado = document.querySelector('.texto-resultado')
const perguntas = [
    {
        enunciado: 'Nome tem 20 anos e mora em Foz do Iguaçu, que é mundialmente conhecido pelas Cataratas, e nome sabe a importância de preservar a água ainda mais em sua cidade, por ser um lugar turístico relacionado a água, nisso nome decide:',
        alternativas: [
            {
                afirmacao: 'Nome escolhe estudar para futuramente trabalhar na Itaipu, e preservar a água e fornecer para o seu país e o país vizinho!',
                texto: 'Nome sempre gostou da Itaipu e sempre se importou com todos ao seu redor.'
            },
        ]
    },
    {
        enunciado: 'Nome com 22 anos começa a cuidar do lago da Itaipu e lá descobre um novo tipo de bactéria presnte na água, o que nome deve fazer?',
        alternativas: [
            {
                afirmacao: 'Nome avisa aos supervisores, e começa a trabalhar como chefe de outros cientistas, contra essa nova bactéria.',
                texto: 'Nome quer salvar a todos.'
            },
            {
                afirmacao: 'Nome anula as bactérias sozinho.',
                texto: 'Nome salva a todos sozinho.'
            }
        ]
    },
    {
        enunciado: 'Nome anula todas as bactérias, e acaba sendo promovido tendo uma ótima carreira.',
        alternativas: [
            {
                afirmacao: 'Nome decedi se aposentar aos 40, pois já têm muitos feitos em sua carreira profissional e quer deixar o jovens terem novas oportunidades.',
                texto: 'Nome está feliz e em paz consigo mesmo.'
            },
            {
                afirmacao: 'Nome se aposenta aos 60 e vive tranqulo, mas sem forças para aproveitar o resto da vida.',
                texto: 'Nome continua na carreira'
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();

}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostreResultado(){
    caixaPerguntas.textContent = " Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();



