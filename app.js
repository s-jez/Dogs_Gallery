import { readDogs } from "./fetch_dogs.js";

const ARROW_LEFT = document.querySelector(".arrow-left");
const ARROW_RIGHT = document.querySelector(".arrow-right");
const IMAGE_GALLERY = document.querySelector(".images-gallery");

let dogsArr = [];

const ShowDogImage = () => {
  const apiURL = "https://api.thedogapi.com/v1/images/search";
  readDogs(apiURL)
    .then((data) => {
      dogsArr = data;
    })
    .then(() => {
      IMAGE_GALLERY.src = dogsArr[0].url;
    });
};
ARROW_LEFT.addEventListener("click", () => {
  ShowDogImage();
});
ARROW_RIGHT.addEventListener("click", () => {
  ShowDogImage();
});
