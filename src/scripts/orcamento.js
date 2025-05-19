//Selecionar items no orçamento automaticamente

const parametros = new URLSearchParams(location.search)

parametros.forEach((parametro) => {
  const element = document.getElementById(parametro)
  if (element) {
    element.checked = true
  }
})