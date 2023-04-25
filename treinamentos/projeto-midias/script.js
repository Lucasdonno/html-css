const audioClicaSeta = document.getElementById("audio-seta");
const startButton = document.querySelector("#start-button");
const audioClicaStart = document.getElementById("audio-start")

// Função que rola a tela do usuário para baixo

function scrollToParte2() {
    const parte2 = document.querySelector('#parte2');
    parte2.scrollIntoView({ behavior: 'smooth' });
}
function scrollToParte3() {
    const parte3 = document.querySelector('#parte3');
    parte3.scrollIntoView({ behavior: 'smooth' });
}

// Função que reproduz uma música com evento de onclick

function playAudio() {
    audioClicaSeta.play();
    audioClicaSeta.volume = 0.2;
}

// Junção das duas funções onclick em uma única.

function clicaParaRolar2() {
    scrollToParte2();
    playAudio();
}

function clicaParaRolar3() {
    scrollToParte3();
    playAudio();
}

function playAudioStart() {
    audioClicaStart.play();
    audioClicaStart.volume = 1;
}

startButton.addEventListener('click', () => {
    startButton.classList.add('desintegrar');
});



