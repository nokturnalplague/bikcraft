//Galeria de imagens

const container = document.querySelector('.bicicleta-imagens')
const galeria = document.querySelectorAll('.bicicleta-imagens picture')

function trocarImagem(event) {
  const img = event.currentTarget

  container.prepend(img)
}

galeria.forEach((img) => {
  img.addEventListener('click', trocarImagem)
})