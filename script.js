const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const title = document.getElementById("song-title");
const artist = document.getElementById("song-artist");
const coverImg = document.getElementById("cover-img");

// PLAYLIST
const songs = [
  {
    name: "Uyirae",
    artist: "Nakul Abhyankar",
    src: "songs/song1.mp3",
    img: "images/song1.jpg"
  },
  {
    name: "Pavizha Mazhaiye",
    artist: "K. S. Harisankar",
    src: "songs/song2.mp3",
    img: "images/song2.jpg"
  },
  {
    name: "Nee Kavithaigala",
    artist: "Pradeep kumar",
    src: "songs/song3.mp3",
    img: "images/song3.jpg"
  },
  {
    name: "Heeriye Heeriye",
    artist: "Arijit Singh",
    src: "songs/song4.mp3",
    img: "images/song4.jpg"
  },
  {
    name: "Kurumugil",
    artist: "Madhan Karky and Sai Vignesh",
    src: "songs/song5.mp3",
    img: "images/song5.jpg"
  }
];


let songIndex = 0;
let isPlaying = false;

// LOAD SONG
function loadSong(index) {
  audio.src = songs[index].src;
  title.textContent = songs[index].name;
  artist.textContent = songs[index].artist;
  coverImg.src = songs[index].img;
document.querySelector(".bg-blur").style.backgroundImage =
  `url(${songs[index].img})`;

}

loadSong(songIndex);

// PLAY / PAUSE
playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
  isPlaying = !isPlaying;
});

// NEXT
nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  audio.play();
  playBtn.textContent = "⏸";
  isPlaying = true;
});

// PREVIOUS
prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  audio.play();
  playBtn.textContent = "⏸";
  isPlaying = true;
});

// PROGRESS UPDATE
audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

// SEEK
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// AUTO NEXT
audio.addEventListener("ended", () => {
  nextBtn.click();
});
