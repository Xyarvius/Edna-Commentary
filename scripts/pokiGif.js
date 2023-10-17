number = 0;
const animations = [
    'imgs/poki/poki_1.png',
    'imgs/poki/Poki-talk.gif'
];

const audio = document.getElementById('audioPlayer');
audio.addEventListener('play', startGif);
audio.addEventListener('pause', endtGif);

endtGif();

function startGif() {
    number = 1;
    character();
}

function endtGif() {
    number = 0;
    character();
}

function character() {
    image = document.getElementById('poki');
    image.src = animations[number];
}