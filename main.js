const caixaPrincipal = document.querySelector('.caixa-principal')
const caixaPerguntas = document.querySelector('.caixa-perguntas')
const caixaAlternativas = document.querySelector('.caixa-alternativas')
const caixaResultado = document.querySelector('.caixa-resultado')
const textoResultado = document.querySelector('.texto-resultado')
let nome = prompt('Digite o seu nome aqui:');
console.log(nome)
const perguntas = [
    {
        enunciado: `${nome} tem 20 anos e mora em Foz do Iguaçu, que é mundialmente conhecido pelas Cataratas, e ${nome} sabe a importância de preservar à água ainda mais em sua cidade, por ser um lugar turístico relacionado a água. Diante disso ${nome} decide:`,
        alternativas: [
            {
                afirmacao: `${nome} escolhe estudar para futuramente trabalhar na Itaipu, e preservar a água e fornecer para o seu país e o país vizinho!`,
                texto: `${nome} sempre gostou da Itaipu e sempre se importou com todos ao seu redor.`
            },
            {
                afirmacao: `${nome} faz um concurso público e entra na Itaipu, e se sai muito bem, pois passou em primeiro lugar!`,
                texto: `${nome} quer ingressar logo na sua carreira.`
            }
        ]
    },
    {
        enunciado: `${nome} com 22 anos começa a cuidar do lago da Itaipu e lá descobre um novo tipo de bactéria presnte na água, o que nome deve fazer?`,
        alternativas: [
            {
                afirmacao: `${nome} avisa aos supervisores, e começa a trabalhar como chefe de outros cientistas, contra essa nova bactéria.`,
                texto: `${nome} quer salvar a todos.`
            },
            {
                afirmacao: `${nome} anula as bactérias sozinho.`,
                texto: `${nome} salva a todos sozinho.`
            }
        ]
    },
    {
        enunciado: `${nome} anula todas as bactérias, e acaba sendo promovido tendo uma ótima carreira.`,
        alternativas: [
            {
                afirmacao: `${nome} decedi se aposentar aos 40, pois já têm muitos feitos em sua carreira profissional e quer deixar o jovens terem novas oportunidades.`,
                texto: `${nome} está feliz e em paz consigo mesmo.`
            },
            {
                afirmacao: `${nome} se aposenta aos 60 e vive tranqulo, mas sem forças para aproveitar o resto da vida.`,
                texto: `${nome} continua na carreira.`
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
    const afirmacoes =  opcaoSelecionada.afirmacao;
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



