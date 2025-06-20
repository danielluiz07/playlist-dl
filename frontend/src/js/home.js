const playlist = [
  {
    title: "UM MERO SONHADOR APONTADO POR DEUS - MC Marks (SET WESLEY ALEMÃO 2)",
    src: "/src/audio/um-mero-sonhador.mp3"
  },
  {
    title: "3 DIAS VIRADO - MC IG",
    src: "/src/audio/3-dias-virado.mp3"
  },
  {
    title: "365 DIAS - MC'S Marks, Ryan SP, Jvila, Aaron Modesto, Magal, Bruno MS e Luuky",
    src: "/src/audio/365-dias.mp3"
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

// --- Animação de fundo ---
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const numParticles = 150;

for (let i = 0; i < numParticles; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        d: Math.random() * numParticles,
    });
}

let angle = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.beginPath();

    for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }

    ctx.fill();
    update();
}

function update() {
    angle += 0.01;

    for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(angle) * 2;

        if (p.y > canvas.height) {
            particles[i] = {
                x: Math.random() * canvas.width,
                y: 0,
                r: p.r,
                d: p.d,
            };
        }
    }
}

setInterval(draw, 33);