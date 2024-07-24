const caixaPrincipal = document.querySelector('.caixa-principal')
const caixaPerguntas = document.querySelector('.caixa-perguntas')
const caixaAlternativas = document.querySelector('.caixa-alternativas')
const caixaResultado = document.querySelector('.caixa-resultado')
const textoResultado = document.querySelector('.texto-resultado')
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
        enunciado: 'Nome perde o emprego e fica desempregado, pois a bactéria se propagou, e levou 10% da cidade à óbito e terá que cumprir uma pena.',
        alternativas: [
            'Nome decide se render, e cumprir a pena pela sua negligência, para pelo menos fazer algo certo na vida.',
            'Nome decide contratar um advogado e escapar da sua condenação, e viver uma vida em paz'
        ]
    },
    {
        enunciado: 'Nome anula todas as bactéria salvando a sociedade, e ganha a chave da cidade!',
        alternativas: [
            'Nome decedi se aposentar aos 40, pois já têm muitos feitos em sua carreira profissional e quer deixar o jovens à terem oportunidades.',
            'Nome decide entrar mais afundo na sua profissão, e depois de 20 anos se aposentar.'
        ]
    }
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
        botaoAlternativas.textContent = alternativa
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
    caixaPerguntas.text = " Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}
mostraPergunta();



