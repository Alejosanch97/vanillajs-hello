/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["El perro", "Mi abuela", "Mi tortuga", "Mi canario", "Mi gato"];
let what = ["se comió", "aplastó", "robó", "rompió", "ensució"];
let when = [
  "antes de clases",
  "justo cuando terminé",
  "mientras almorzaba",
  "mientras yo rezaba"
];

function excuseGenerator() {
  // Generate random indices for each array
  const numblame = Math.floor(Math.random() * who.length);
  const numaction = Math.floor(Math.random() * what.length);
  const numCuando = Math.floor(Math.random() * when.length);

  // Construct and return the excuse using the random indices
  return `${who[numblame]} ${what[numaction]} mi tarea ${when[numCuando]}`;
}

window.onload = function() {
  // Generate a random excuse using the excuseGenerator function
  const randomExcuse = excuseGenerator();

  // Get the h1 element using document.getElementById
  const h1Element = document.getElementById("myExcuse"); // Replace 'myExcuse' with the actual ID of your h1 element

  // Set the h1 element's innerHTML to display the random excuse
  h1Element.innerHTML = randomExcuse;
};
