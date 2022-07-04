import { readDogs } from "./fetch_dogs.js";

const DROPDOWN_MENU = document.querySelector(".dropdown-menu");
const IMAGE_BREED = document.querySelector(".image-breed");

let dogInfo = [];
let dogImage = [];
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
        btn.classList.add(id);
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
              console.log(dogImage[selectedBreedId]);
              IMAGE_BREED.src = data[selectedBreedId].image.url;
              CreateBreadDesc(
                data[selectedBreedId].name,
                data[selectedBreedId].life_span,
                data[selectedBreedId].temperament,
                data[selectedBreedId].weight.metric,
                data[selectedBreedId].bred_for
              );
            });
          }
        });
      });
    })
    .catch((err) => console.log(err));
};
const CreateBreadDesc = (name, life_span, temperament, weight, bred_for) => {
  let descEl = document.createElement("div");
  document.getElementById("dogs-list").innerHTML = "";
  descEl.classList.add("text-center");
  descEl.innerHTML += `<li>Breed: <b>${name}</b></li>`;
  descEl.innerHTML += `<li>Lifespan: <b>${life_span}</b></li>`;
  descEl.innerHTML += `<li>Temperament: <b>${temperament}</b></li>`;
  descEl.innerHTML += `<li>Weight: <b>${weight} kg</b></li>`;
  descEl.innerHTML += `<li>Bred for: <b>${bred_for}</b></li>`;
  descEl.innerHTML += "<br />";
  document.getElementById("dogs-list").appendChild(descEl);
};
window.onload = () => {
  ShowBreeds();
};
