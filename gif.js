import { readDogs } from "./fetch_dogs.js";
const btnGIF = document.querySelector(".btn-gif");
const dogGIF = document.querySelector(".dog-gif");

const urlAPI = "https://api.thedogapi.com/v1/images/search?mime_types=gif";

btnGIF.addEventListener("click", () => {
  document.querySelector(".dog-gif").innerHTML = "";
  readDogs(urlAPI)
    .then((data) => {
      let gifElements = data;
      gifElements.map(() => {
        let img = document.createElement("img");
        img.src = gifElements[0].url;
        dogGIF.appendChild(img);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
