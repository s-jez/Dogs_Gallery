import { urlImages } from "./api_url.js";
import { readDogs } from "./fetch_dogs.js";

const ARROW_LEFT = document.querySelector(".arrow-left");
const ARROW_RIGHT = document.querySelector(".arrow-right");
const IMAGE_GALLERY = document.querySelector(".images-gallery");

const ShowDogImage = () => {
  let dogsArr = [];
  try {
    readDogs(urlImages)
      .then((data) => {
        dogsArr = data;
      })
      .then(() => {
        IMAGE_GALLERY.src = dogsArr[0].url;
      });
  } catch (err) {
    console.log(err);
    IMAGE_GALLERY.textContent = err;
  }
};
ARROW_LEFT.addEventListener("click", ShowDogImage);
ARROW_RIGHT.addEventListener("click", ShowDogImage);
