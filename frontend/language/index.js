window.onload = function() {
  window.scrollTo(0, 0);
};


//vamo arriba

function playVamoArriba() {
const playerButton1 = document.querySelector('.player-button1'),
      audio1 = document.querySelector('.audio1'),
      playIcon1 = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      `

function toggleAudio () {
  if (audio1.paused) {
    audio1.play();
  } else {
    audio1.pause();
  }
}

playerButton1.addEventListener('click', toggleAudio);
}

playVamoArriba();

//No tiene Gollete

function playNoTieneGollete(){

const playerButton2 = document.querySelector('.player-button2'),
      audio2 = document.querySelector('.audio2'),
      playIcon2 = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      `

function toggleAudio () {
  if (audio2.paused) {
    audio2.play();
  } else {
    audio2.pause();
  }
}

playerButton2.addEventListener('click', toggleAudio);

}

playNoTieneGollete();


//Che
function playChe() {
const playerButton3 = document.querySelector('.player-button3'),
      audio3 = document.querySelector('.audio3'),
      playIcon3 = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      `

function toggleAudio () {
  if (audio3.paused) {
    audio3.play();
  } else {
    audio3.pause();
  }
}

    playerButton3.addEventListener('click', toggleAudio);
}

    playChe();
 

//Todo bien
function playTodoBien() {
const playerButton4 = document.querySelector('.player-button4'),
      audio4 = document.querySelector('.audio4'),
      playIcon4 = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      `

function toggleAudio () {
  if (audio4.paused) {
    audio4.play();
  } else {
    audio4.pause();
  }
}

playerButton4.addEventListener('click', toggleAudio);
}


playTodoBien();

//Dale

function playDale(){
const playerButton5 = document.querySelector('.player-button5'),
      audio5 = document.querySelector('.audio5'),
      playIcon5 = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3D3132">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
  </svg>
      `

function toggleAudio () {
  if (audio5.paused) {
    audio5.play();
  } else {
    audio5.pause();
  }
}

playerButton5.addEventListener('click', toggleAudio);
}

playDale();
