const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1. O Loki pode ser considerado um vilão?",
        alternativas: [
            {
                texto: "A) Sim, porque cometeu atos terríveis e tentou conquistar a Terra.",
                afirmacao: "Você enxerga o Loki pelos seus atos vilanescos e tentativas de conquista,"
            },
            {
                texto: "B) Não, porque ele nunca teve más intenções.",
                afirmacao: "Você enxerga o Loki como uma figura incompreendida e anti-herói,"
            }
        ]
    },
    {
        enunciado: "2. O Thanos estava certo em acreditar que precisava eliminar metade da vida?",
        alternativas: [
            {
                texto: "A) Não, porque ele decidiu sozinho quem deveria viver ou morrer.",
                afirmacao: "reconhece a tirania do Thanos ao decidir o destino do universo,"
            },
            {
                texto: "B) Sim, porque as Joias do Infinito davam a ele autoridade para decidir isso.",
                afirmacao: "compreende a lógica radical do Thanos através das Joias,"
            }
        ]
    },
    {
        enunciado: "3. O Tony Stark foi um herói desde o começo do MCU?",
        alternativas: [
            {
                texto: "A) Não, porque inicialmente era muito egoísta e só mudou depois de algumas experiências.",
                afirmacao: "percebe a evolução moral do Tony Stark ao longo da jornada,"
            },
            {
                texto: "B) Sim, porque mesmo tendo defeitos, sempre teve intenção de proteger as pessoas.",
                afirmacao: "acredita na essência heróica do Stark desde o princípio,"
            }
        ]
    },
    {
        enunciado: "4. Em As Crônicas de Nárnia, quais dos quatro irmãos Pevensie foram os dois primeiros a descobrir e entrar no mundo mágico através do guarda-roupa?",
        alternativas: [
            {
                texto: "A) Lúcia",
                afirmacao: "lembra bem da Lúcia sendo a pioneira a descobrir Nárnia,"
            },
            {
                texto: "B) Edmundo",
                afirmacao: "lembra do Edmundo seguindo a irmã logo em seguida para o guarda-roupa,"
            }
        ]
    },
    {
        enunciado: "5. Sobre Joe Goldberg na série 'You', qual opção descreve corretamente seu perfil?",
        alternativas: [
            {
                texto: "A) Stalker: Ele utiliza vigilância física, invasão de privacidade e monitoramento digital para se aproximar das vítimas.",
                afirmacao: "e identifica o comportamento de perseguidor obsessivo do Joe Goldberg."
            },
            {
                texto: "B) Psicopata / Perfil Antissocial: Ele demonstra charme superficial, manipulação fria e ausência de remorso genuíno.",
                afirmacao: "e identifica os traços psicopáticos e manipuladores de Joe Goldberg."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        exibeResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostreAlternativas();
}

function mostreAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function exibeResultado() {
    caixaPerguntas.textContent = "Sua Visão sobre os Personagens:";
    textoResultado.textContent = "Resumo da sua análise: " + historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();