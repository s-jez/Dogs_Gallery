import { urlImages } from "./api_url.js";
import { readDogs } from "./fetch_dogs.js";

const ARROW_LEFT = document.querySelector(".arrow-left");
const ARROW_RIGHT = document.querySelector(".arrow-right");
const IMAGE_GALLERY = document.querySelector(".images-gallery");

const ShowDogImage = async () => {
  try {
    const data = await readDogs(urlImages);
    IMAGE_GALLERY.src = data[0].url;
  } catch (err) {
    console.log(err);
  }
};
window.addEventListener("load", ShowDogImage);
ARROW_LEFT.addEventListener("click", ShowDogImage);
ARROW_RIGHT.addEventListener("click", ShowDogImage);
