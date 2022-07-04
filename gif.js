import { urlGIF } from "./api_url.js";
import { readDogs } from "./fetch_dogs.js";
const btnGIF = document.querySelector(".btn-gif");
const dogGIF = document.querySelector(".dog-gif");

const fetchGif = () => {
  document.querySelector(".dog-gif").innerHTML = "";
  readDogs(urlGIF)
    .then((data) => {
      data.map(() => {
        const img = document.createElement("img");
        img.src = data[0].url;
        dogGIF.appendChild(img);
      });
    })
    .catch((err) => {
      return err;
    });
};
document.addEventListener("DOMContentLoaded", fetchGif);
btnGIF.addEventListener("click", fetchGif);
