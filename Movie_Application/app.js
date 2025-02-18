let api = "http://www.omdbapi.com/?i=tt3896198&apikey=b0e35823&t=";

let title = document.getElementById("title");
let director = document.getElementById("director");
let actors = document.getElementById("actors");
let awards = document.getElementById("awards");
let country = document.getElementById("country");
let genre = document.getElementById("genre");
let plot = document.getElementById("plot");
let released = document.getElementById("released");
let writer = document.getElementById("writer");
let imdbRating = document.getElementById("imdbRating");
let posterImg = document.getElementById("posterImg");
let body = document.body;
let imgURL = "https://i.ibb.co/6DL79MH/grey.jpg";
let loader = document.getElementById("loader");
let container = document.getElementById("detail-container");
container.classList.add("d-none");
loader.classList.add("d-none");

posterImg.src = " ";

searchMovie = () => {
  loader.classList.remove("d-none");
  posterImg.src = " ";
  let movieName = document.getElementById("movieName");
  let query = api + movieName.value;

  fetch(query)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      if (data.Title == undefined) {
        posterImg.src = " ";
        loader.classList.add("d-none");
        container.classList.add("d-none");

        console.log("bro you are right 100%");
        let a = data.Poster;
        console.log(a);
        document.body.style.background ="url('https://i.ibb.co/6DL79MH/grey.jpg')";

        alert(`We couldn't find the movie with "${movieName.value}"`);
      }
      else {

      loader.classList.add("d-none");
      container.classList.remove("d-none");

      title.innerText = data.Title;
      director.innerText = data.Director;
      actors.innerText = data.Actors;
      awards.innerText = data.Awards;
      country.innerText = data.Country;
      genre.innerText = data.Genre;
      plot.innerText = data.Plot;
      released.innerText = data.Released;
      writer.innerText = data.Writer;
      imdbRating.innerText = data.imdbRating;
      posterImg.src = data.Poster;
      
      let a = (data.Poster).length;
      console.log(a); //undefined
      if (a == 3 || a == undefined || a == 0) {
        document.body.style.background =
          "url('https://i.ibb.co/6DL79MH/grey.jpg')";
      } else {
        body.removeAttribute("style");
        body.setAttribute("background", data.Poster);
      }
    }
    });
    
};

emtyfield = () => {
  title.innerText = " ";
  director.innerText = " ";
  actors.innerText = " ";
  awards.innerText = " ";
  country.innerText = " ";
  genre.innerText = " ";
  plot.innerHTML = " ";
  released.innerText = " ";
  writer.innerText = " ";
  imdbRating.innerText = " ";
  posterImg.src = " ";
  // console.log(s);
};
body.classList.add("light-mode");

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const body = document.body;

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    }
  });
});
