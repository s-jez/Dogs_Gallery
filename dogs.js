import { readDogs } from "./fetch_dogs.js";

const BTN_SHOW = document.querySelector(".btn__show");
const UL_LIST = document.querySelector(".dogs__list");

let dogImage = [];

const ShowBreeds = () => {
  const apiURL = "https://api.thedogapi.com/v1/breeds";
  UL_LIST.textContent = "";
  let items = Array.from(
    { length: 40 },
    (_, i) => i + Math.floor(Math.random() * 3)
  );
  readDogs(apiURL)
    .then((data) => {
      dogImage = data;
    })
    .then(() => {
      items.forEach(function (id) {
        const li = document.createElement("li");
        const br = document.createElement("br");
        if (dogImage !== "undefined") {
          const dogName = document.createTextNode(dogImage[id].name);
          li.appendChild(dogName);
          UL_LIST.appendChild(br);
          UL_LIST.appendChild(li);
        }
      });
    });
};
BTN_SHOW.addEventListener("click", () => {
  ShowBreeds();
});
