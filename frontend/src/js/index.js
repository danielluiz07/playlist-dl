const playlist = [
  {
    title: "UM MERO SONHADOR APONTADO POR DEUS - MC Marks (SET WESLEY ALEMÃO 2)",
    src: "src/audio/um-mero-sonhador.mp3"
  },
  {
    title: "3 DIAS VIRADO - MC IG",
    src: "src/audio/3-dias-virado.mp3"
  },
  {
    title: "365 DIAS - MC'S Marks, Ryan SP, Jvila, Aaron Modesto, Magal, Bruno MS e Luuky",
    src: "src/audio/365-dias.mp3"
  }
];

const playlistDiv = document.getElementById("playlist");
const audioPlayer = document.getElementById("audio-player");
const nowPlaying = document.getElementById("now-playing");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");

playlist.forEach((track, index) => {
  const trackDiv = document.createElement("div");
  trackDiv.classList.add("track");
  trackDiv.innerHTML = `
    <span class="track-title">${track.title}</span>
    <button onclick="playTrack(${index})">Tocar</button>
  `;
  playlistDiv.appendChild(trackDiv);
});

function playTrack(index) {
  const track = playlist[index];
  audioPlayer.src = track.src;
  audioPlayer.play();
  nowPlaying.textContent = `Tocando agora: ${track.title}`;
}

playBtn.addEventListener("click", () => {
  audioPlayer.play();
});

pauseBtn.addEventListener("click", () => {
  audioPlayer.pause();
});