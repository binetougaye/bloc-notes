// Variables
let notes = document.getElementById("notes");
let button = document.getElementById("btn");
// LOGIC
function ajout() {
  let champs = document.createElement("div");
  notes.append(champs);
  let text = document.createElement("textarea");
  champs.append(text);
  let deletes = document.createElement("button");
  champs.appendChild(deletes);
  // button.style.backgroundColor = "red";
  deletes.innerText = "Delete";
  deletes.addEventListener("click", function () {
    text.style.display = "none";
    deletes.style.display = "none";
  });
}
button.addEventListener("click", ajout);
