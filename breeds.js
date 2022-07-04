import { urlBreeds } from "./api_url.js";
import { readDogs } from "./fetch_dogs.js";

const DROPDOWN_MENU = document.querySelector(".dropdown-menu");
const IMAGE_BREED = document.querySelector(".image-breed");
const DOG_BREEDS = document.querySelector(".dogs-breeds");

const randomArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

const ShowBreeds = () => {
  DROPDOWN_MENU.textContent = "";
  let items = randomArray(5, 100);
  readDogs(urlBreeds)
    .then((data) => {
      items.forEach((selectedBreedId) => {
        const btn = document.createElement("button");
        btn.classList.toggle("dropdown-item");
        btn.classList.add(selectedBreedId);
        if (data !== undefined) {
          const dogName = document.createTextNode(data[selectedBreedId].name);
          btn.appendChild(dogName);
          DROPDOWN_MENU.appendChild(btn);
        }
        btn.addEventListener("click", () => {
          if (selectedBreedId !== undefined) {
            readDogs(urlBreeds).then((data) => {
              console.log(data[selectedBreedId]);
              IMAGE_BREED.src = data[selectedBreedId].image.url;
              CreateBreadDesc(data[selectedBreedId]);
            });
          }
        });
      });
    })
    .catch((err) => console.log(err));
};
const CreateBreadDesc = ({
  name,
  life_span,
  temperament,
  weight: { metric },
  bred_for,
}) => {
  const descEl = document.createElement("div");
  DOG_BREEDS.innerHTML = "";
  descEl.classList.add("container", "text-center");
  descEl.innerHTML += `<p>Breed: <b>${name}</b></p>`;
  descEl.innerHTML += `<p>Lifespan: <b>${life_span}</b></p>`;
  descEl.innerHTML += `<p>Temperament: <b>${temperament}</b></p>`;
  descEl.innerHTML += `<p>Weight: <b>${metric} kg</b></p>`;
  descEl.innerHTML += `<p>Bred for: <b>${bred_for}</b></p>`;
  DOG_BREEDS.appendChild(descEl);
};
window.addEventListener("load", ShowBreeds);
