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
const canvas = document.getElementById('background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
    this.opacity = Math.random();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Rebote nas bordas
    if (this.x + this.size > canvas.width || this.x - this.size < 0)
      this.speedX *= -1;
    if (this.y + this.size > canvas.height || this.y - this.size < 0)
      this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 255, 180, ${this.opacity})`;
    ctx.fill();
  }
}

function initParticles(amount = 100) {
  particles = [];
  for (let i = 0; i < amount; i++) {
    let size = Math.random() * 3 + 1;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let speedX = (Math.random() - 0.5) * 1.5;
    let speedY = (Math.random() - 0.5) * 1.5;
    particles.push(new Particle(x, y, size, speedX, speedY));
  }
}

function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // efeito rastro
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    p.update();
    p.draw();
  });

  requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

initParticles();
animate();
