//Selecionar items no orçamento automaticamente

const parametros = new URLSearchParams(location.search)

function ativarProduto(parametro) {
  const element = document.getElementById(parametro)
  if (element) {
    element.checked = true
  }
}

parametros.forEach(ativarProduto)