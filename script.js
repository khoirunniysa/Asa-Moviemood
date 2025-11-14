// === DATA FILM (masih sama seperti file kamu) ===
const movies = {
  happy: [
    { title: "Paddington 2", genre: "Comedy", country: "UK", img: "paddington2.jpg" },
    { title: "Sing", genre: "Animation", country: "USA", img: "sing.webp" },
    { title: "The Lego Movie", genre: "Adventure", country: "USA", img: "thelegomovie.jpg" },
    { title: "Extreme Job", genre: "Comedy", country: "Korea", img: "Extreme_Job.jpg" },
    { title: "Dilan 1990", genre: "Romance", country: "Indonesia", img: "Dilan_1990.jpg" },
    { title: "Ratatouille", genre: "Animation", country: "USA", img: "ratatouile.jpg" },
    { title: "Your Name", genre: "Animation", country: "Japan", img: "Your_Name.png" },
    { title: "Miracle in Cell No.7", genre: "Drama", country: "Korea", img: "Miracle.jpeg" },
    { title: "Cek Toko Sebelah", genre: "Comedy", country: "Indonesia", img: "Cek_Toko_Sebelah.jpg" },
    { title: "Happy New Year", genre: "Comedy", country: "India", img: "Happy_New_Year.jpg" }
  ],

  sad: [
    { title: "The Pursuit of Happyness", genre: "Drama", country: "USA", img: "pursuitofhappyness.jpg" },
    { title: "Hachi", genre: "Drama", country: "USA", img: "hachi.jpeg" },
    { title: "Your Lie in April", genre: "Animation", country: "Japan", img: "Your_Lie_in_April.png" },
    { title: "The World of the Married", genre: "Drama", country: "Korea", img: "drakor.webp" },
    { title: "Laskar Pelangi", genre: "Drama", country: "Indonesia", img: "Laskar_Pelangi.jpg" },
    { title: "A Silent Voice", genre: "Animation", country: "Japan", img: "A_Silent_Voice.jpg" },
    { title: "My Name is Khan", genre: "Drama", country: "India", img: "My_Name_Is_Khan.jpg" },
    { title: "Be with You", genre: "Romance", country: "Korea", img: "Be_With_You.jpg" },
    { title: "Grave of the Fireflies", genre: "Animation", country: "Japan", img: "fireflies.jpg" },
    { title: "Mr.Sunshine", genre: "Drama", country: "Korea", img: "Mr._Sunshine_(2018_TV_series).jpg" }
  ],

  romantic: [
    { title: "La La Land", genre: "Musical", country: "USA", img: "lalaland.jpg" },
    { title: "Crash Landing on You", genre: "Romance", country: "Korea", img: "Crash_Landing_on_You_main.jpg" },
    { title: "Kimi ni Todoke", genre: "Romance", country: "Japan", img: "Kimi_ni_Todoke.jpg" },
    { title: "Crazy Rich Asians", genre: "Comedy", country: "Singapore/USA", img: "crazy.jpg" },
    { title: "Habibie & Ainun", genre: "Drama", country: "Indonesia", img: "Habibie_Ainun.jpg" },
    { title: "The Notebook", genre: "Romance", country: "USA", img: "notebook.jpg" },
    { title: "Weathering With You", genre: "Animation", country: "Japan", img: "Weathering_with_You.jpg" },
    { title: "20th Century Girl", genre: "Romance", country: "Korea", img: "20th_Century_Girl.jpg" },
    { title: "Tak Ingin Usai di Sini", genre: "Romance", country: "Indonesia", img: "takinginusai.jpeg" },
    { title: "To All the Boys", genre: "Comedy", country: "USA", img: "To_All_the_Boys_I've_Loved_Before.jpg" }
  ],

  bored: [
    { title: "Inception", genre: "Sci-Fi", country: "USA", img: "unnamed.png" },
    { title: "Parasite", genre: "Thriller", country: "Korea", img: "parasite.jpg" },
    { title: "Guardians of Galaxy", genre: "Action", country: "USA", img: "GuardiansoftheGalaxy.jpg" },
    { title: "The Raid 2", genre: "Action", country: "Indonesia", img: "theraid.jpg" },
    { title: "Train to Busan", genre: "Horror", country: "Korea", img: "Train_to_Busan.jpg" },
    { title: "Spider-Man", genre: "Action", country: "USA", img: "spiderman.jpeg" },
    { title: "Ready Player One", genre: "Sci-Fi", country: "USA", img: "Ready_player.jpg" },
    { title: "Naruto", genre: "Animation", country: "Japan", img: "Naruto.webp" },
    { title: "Ultraman X", genre: "Action", country: "Japan", img: "Ultraman_X.png" },
    { title: "One Piece Film Red", genre: "Animation", country: "Japan", img: "One_Piece.jpg" }
  ],
};


// === Element
const moodButtons = document.querySelectorAll("[data-mood]");
const movieList = document.getElementById("movie-list");
const genreSelect = document.getElementById("genre");

let currentMood = null;
let currentGenre = "all";


// === Mood click
moodButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    currentMood = btn.dataset.mood;
    genreSelect.value = "all";
    currentGenre = "all";
    showMovies();
  });
});


// === Genre filter
genreSelect.addEventListener("change", () => {
  currentGenre = genreSelect.value;
  showMovies();
});


// === Show movies
function showMovies() {
  movieList.innerHTML = "";
  if (!currentMood) return;

  const selected = movies[currentMood].filter(m => {
    if (currentGenre === "all") return true;
    return m.genre.toLowerCase().includes(currentGenre.toLowerCase());
  });

  if (selected.length === 0) {
    movieList.innerHTML = `<p style="color:#ccc">Tidak ada film sesuai filter</p>`;
    return;
  }

  selected.forEach(m => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${m.img}">
      <h3>${m.title}</h3>
      <p>${m.genre} • ${m.country}</p>
    `;
    movieList.appendChild(card);
  });
}


// === Default
movieList.innerHTML = `<p style="color:#aaa">Pilih mood terlebih dahulu</p>`;
