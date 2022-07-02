import { readDogs } from "./fetch_dogs.js";

const ARROW_LEFT = document.querySelector(".arrow-left");
const ARROW_RIGHT = document.querySelector(".arrow-right");
const IMAGE_GALLERY = document.querySelector(".images-gallery");

let dogImage = [];

const ShowDefaultImage = () => {
  const apiURL = "https://api.thedogapi.com/v1/images/search";
  readDogs(apiURL)
    .then((data) => {
      dogImage = data;
    })
    .then(() => {
      IMAGE_GALLERY.src = dogImage[0].url;
    });
};
ARROW_LEFT.addEventListener("click", () => {
  ShowDefaultImage();
});
ARROW_RIGHT.addEventListener("click", () => {
  ShowDefaultImage();
});
