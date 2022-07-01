import { readDogs } from "./dogs.js";

const ARROW_LEFT = document.querySelector(".arrow-left");
const ARROW_RIGHT = document.querySelector(".arrow-right");
const IMAGE_GALLERY = document.querySelector(".images-gallery");

const UL_LIST = document.querySelector(".dogs__list");
const BTN_SHOW = document.querySelector(".btn__show");

let dogImage = [];

const ShowDefaultImage = () => {
  readDogs("https://api.thedogapi.com/v1/images/search").then((data) => {
    dogImage = data;
  });
  setTimeout(() => {
    IMAGE_GALLERY.src = dogImage[0].url;
  }, 500);
  console.log(dogImage);
};
const ShowBreeds = () => {
  UL_LIST.textContent = "";
  let items = Array.from(
    { length: 40 },
    (_, i) => i + Math.floor(Math.random() * 3)
  );
  readDogs("https://api.thedogapi.com/v1/breeds").then((data) => {
    dogImage = data;
  });
  setTimeout(() => {
    items.forEach(function (id) {
      var li = document.createElement("li");
      if (dogImage !== "undefined") {
        var dogName = document.createTextNode(dogImage[id].name);
        li.appendChild(dogName);
        UL_LIST.appendChild(li);
      }
    });
  }, 1000);
};
if (ARROW_LEFT || ARROW_RIGHT) {
  ARROW_LEFT.addEventListener("click", ShowDefaultImage);
  ARROW_RIGHT.addEventListener("click", ShowDefaultImage);
}
if (BTN_SHOW) {
  BTN_SHOW.addEventListener("click", ShowBreeds);
}
