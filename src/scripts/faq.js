//FAQ

const perguntas = document.querySelectorAll('.perguntas button')

function ativarPerguntas(event) {
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)

  resposta.classList.toggle('ativo')
  const ativo = resposta.classList.contains('ativo')
  pergunta.setAttribute('aria-expanded', ativo)
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPerguntas)
}

perguntas.forEach(eventosPerguntas)