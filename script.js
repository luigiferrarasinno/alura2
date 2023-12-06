const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')


focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
    banner.setAttribute('src', './imagens/foco.png')
    titulo.innerHTML = `
    Otimize sua produtividade,<br>
        <strong class="app__title-strong">mergulhe no que importa.</strong>
    `
    focoBt.classList.add("active")
    curtoBt.classList.remove("active")
    longoBt.classList.remove("active")


})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
    banner.setAttribute('src', './imagens/descanso-curto.png')
    titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            ` 
        curtoBt.classList.add("active")
        focoBt.classList.remove("active")
        longoBt.classList.remove("active")


})


longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
    banner.setAttribute('src', './imagens/descanso-longo.png')
    titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        longoBt.classList.add("active")
        curtoBt.classList.remove("active")
        focoBt.classList.remove("active")


})
