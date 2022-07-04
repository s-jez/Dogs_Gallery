import { urlBreeds } from "./api_url.js";
import { readDogs } from "./fetch_dogs.js";

const DROPDOWN_MENU = document.querySelector(".dropdown-menu");
const IMAGE_BREED = document.querySelector(".image-breed");

let dogInfo = [];
let dogImage = [];
let selectedBreedId;

const randomArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

const ShowBreeds = () => {
  DROPDOWN_MENU.textContent = "";
  let items = randomArray(5, 100);
  readDogs(urlBreeds)
    .then((data) => {
      dogInfo = data;
    })
    .then(() => {
      items.forEach((id) => {
        const btn = document.createElement("button");
        btn.classList.toggle("dropdown-item");
        btn.classList.add(id);
        if (dogInfo !== "undefined") {
          const dogName = document.createTextNode(dogInfo[id].name);
          btn.appendChild(dogName);
          DROPDOWN_MENU.appendChild(btn);
        }
        btn.addEventListener("click", () => {
          selectedBreedId = id;
          if (selectedBreedId !== undefined) {
            readDogs(urlBreeds).then((data) => {
              dogImage = data;
              console.log(dogImage[selectedBreedId]);
              IMAGE_BREED.src = data[selectedBreedId].image.url;
              CreateBreadDesc(data[selectedBreedId]);
            });
          }
        });
      });
    })
    .catch((err) => err);
};
const CreateBreadDesc = ({
  name,
  life_span,
  temperament,
  weight: { metric },
  bred_for,
}) => {
  const descEl = document.createElement("div");
  document.getElementById("dogs-list").innerHTML = "";
  descEl.classList.add("text-center");
  descEl.innerHTML += `<li>Breed: <b>${name}</b></li>`;
  descEl.innerHTML += `<li>Lifespan: <b>${life_span}</b></li>`;
  descEl.innerHTML += `<li>Temperament: <b>${temperament}</b></li>`;
  descEl.innerHTML += `<li>Weight: <b>${metric} kg</b></li>`;
  descEl.innerHTML += `<li>Bred for: <b>${bred_for}</b></li>`;
  document.getElementById("dogs-list").appendChild(descEl);
};
window.onload = () => {
  ShowBreeds();
};
