let height = 0
let width = 0
let lifes = 1
let time = 20 // Tempo começa com 10s

let criaMosquitoTempo

let nivel = window.location.search // pega toda string à direita do URL
nivel = nivel.replace('?', '') // Pegar o parâmetro sem a '?'

if (nivel === 'normal') {
  criaMosquitoTempo = 1200
} else if (nivel === 'dificil') {
  criaMosquitoTempo = 900
} else if (nivel === 'muitodificil') {
  criaMosquitoTempo = 800
}

ajustaTamanhoPalcoJogo = () => {
  height = window.innerHeight //Pega a Altura do Browser com Onresize
  width = window.innerWidth // Pega a Largura do Browser
}
ajustaTamanhoPalcoJogo()

let cronometer = setInterval(() => {
  time -= 1 // A cada um segundo, decrementa 1 do tempo.

  if (time < 0) {
    clearInterval(cronometer) // Para o cronometro
    clearInterval(criaMosquito) // Para de criar mosquito
    window.location.href = 'vitoria.html'
  } else {
    document.getElementById('cronometer').innerHTML = time
  }
}, 1000)

posicaoRandomica = () => {
  // FUNÇÃO PRINCIPAL
  if (lifes > 5) {
    // Quando chegar em v4 , aplicação para
    window.location.href = 'fim_de_jogo.html'
  } else {
    //Remover o mosquito anterior (caso exista) AUTOMÁTICO
    if (document.getElementById('mosquito')) {
      document.getElementById('mosquito').remove()

      document.getElementById('v' + lifes).src = 'imagens/coracao_vazio.png'
      lifes++
    }
  }

  // Delimita a posição Y (altura) de forma randômica para a variável de altura do browser. Math.floor para arredondar para baixo
  let posicaoY = Math.floor(Math.random() * height) - 90
  let posicaoX = Math.floor(Math.random() * width) - 90

  posicaoY = posicaoY < 0 ? 0 : posicaoY // Operador Ternário
  posicaoX = posicaoX < 0 ? 0 : posicaoX

  //Criar o elemento HTML
  let mosquito = document.createElement('img')
  mosquito.src = 'imagens/mosquito.png'
  mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() // atribuiu a class mosquito1 + atribuição de nova classe. Espaço para nao juntar

  mosquito.style.left = posicaoX + 'px' // Coordenada em pixel
  mosquito.style.top = posicaoY + 'px'
  //mosquito.style.right = posicaoX + 'px'
  //mosquito.style.bottom = posicaoY + 'px'

  mosquito.style.position = 'absolute' // Ficar na frente do background

  mosquito.id = 'mosquito'

  mosquito.onclick = () => {
    document.getElementById('mosquito').remove()
  }

  document.body.appendChild(mosquito)
}

tamanhoAleatorio = () => {
  let classe = Math.floor(Math.random() * 3)

  switch (classe) {
    case 0:
      return 'mosquito1'
    case 1:
      return 'mosquito2'
    case 2:
      return 'mosquito3'
  }
}

ladoAleatorio = () => {
  let classe = Math.floor(Math.random() * 2)

  switch (classe) {
    case 0:
      return 'ladoA'
    case 1:
      return 'ladoB'
  }
}
