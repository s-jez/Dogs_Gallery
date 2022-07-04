import { urlGIF } from "./api_url.js";
import { readDogs } from "./fetch_dogs.js";
const btnGIF = document.querySelector(".btn-gif");
const dogGIF = document.querySelector(".dog-gif");

const fetchGif = () => {
  dogGIF.innerHTML = "";
  readDogs(urlGIF)
    .then((data) => {
      data.map(() => {
        const img = document.createElement("img");
        img.src = data[0].url;
        img.style.width = "100%";
        dogGIF.replaceChildren(img);
      });
    })
    .catch((err) => {
      return err;
    });
};
document.addEventListener("DOMContentLoaded", fetchGif);
btnGIF.addEventListener("click", fetchGif);
