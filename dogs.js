import { readDogs } from "./fetch_dogs.js";

const BTN_SHOW = document.querySelector(".btn-show");
const DROPDOWN_MENU = document.querySelector(".dropdown-menu");
const IMAGE_BREED = document.querySelector(".image-breed");

let dogInfo = [],
  dogImage = [];
let selectedBreedId;

const randomArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

const ShowBreeds = () => {
  const apiURL = "https://api.thedogapi.com/v1/breeds";
  DROPDOWN_MENU.textContent = "";
  let items = randomArray(5, 100);
  readDogs(apiURL)
    .then((data) => {
      dogInfo = data;
    })
    .then(() => {
      items.forEach((id) => {
        const btn = document.createElement("button");
        btn.classList.toggle("dropdown-item");
        btn.classList.toggle(`${id}`);
        if (dogInfo !== "undefined") {
          const dogName = document.createTextNode(dogInfo[id].name);
          btn.appendChild(dogName);
          DROPDOWN_MENU.appendChild(btn);
        }
        btn.addEventListener("click", () => {
          selectedBreedId = id;
          if (selectedBreedId !== undefined) {
            readDogs(apiURL).then((data) => {
              dogImage = data;
              IMAGE_BREED.src = data[selectedBreedId].image.url;
            });
          }
        });
      });
    })
    .catch((err) => console.log(err));
};

BTN_SHOW.addEventListener("click", () => {
  ShowBreeds();
});
