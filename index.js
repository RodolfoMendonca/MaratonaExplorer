const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
    "com certeza",
    "de jeito nenhum",
    "provavelmente",
    "sim",
    "não",
    "é melhor perguntar para sua mãe",
    "é melhor eu não te contar...",
    "isso vai ser surpresa",
    "espero que você ainda tenha esperanças a respeito disso",
    "a esperança é a ultima que morre",
]
// clicar em fazer pergunta
function fazerPergunta() {
  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }
buttonPerguntar.setAttribute("disabled", true)
const pergunta = "<div>" + inputPergunta.value + "</div>" 
//gerar numero aleatório
const totalRespostas = respostas.length
const numeroAleatorio = Math.floor(Math.random () * totalRespostas)
elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
elementoResposta.style.opcity = 1;
    console.log(respostas[numeroAleatorio])
    elementoResposta.innerHTML = respostas[numeroAleatorio]
//sumir a resposta deepois de 3 segundos
  setTimeout(function() {
  elementoResposta.style.opcity = 1;
  buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}