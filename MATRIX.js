// Função para gerar uma resposta aleatória
function gerarRespostaAleatoria(respostas) {
  const indice = Math.floor(Math.random() * respostas.length);
  return respostas[indice];
}

// Array de respostas possíveis
const respostas = [
  "Olá, como posso ajudar?",
  "Estou aqui para responder suas perguntas!",
  "Que pergunta interessante! Vamos ver...",
];

// Função principal da IA
function inteligenciaArtificial(pergunta) {
  if (pergunta.includes("olá") || pergunta.includes("oi")) {
    return gerarRespostaAleatoria(["Olá!", "Oi!", "E aí!"]);
  } else if (pergunta.includes("como você está")) {
    return gerarRespostaAleatoria(["Estou bem, obrigado!", "Muito bem! E você?"]);
  } else if (pergunta.includes("qual é o seu nome")) {
    return "Meu nome é IA Bot.";
  } else {
    return gerarRespostaAleatoria(respostas);
  }
}

// Exemplo de uso da IA
const pergunta = "Olá, qual é o seu nome?";
const resposta = inteligenciaArtificial(pergunta);
console.log(resposta);
