// Afficher en console tous les multiples de 10 jusqu'à 1000
for (i = 1; i < 101; i++) {
  //   console.log(i * 10);
}
// Afficher la table de 5 dans la page HTML
let product = document.getElementById("product");
// for (i = 1; i < 11; i++) {
//   let p = document.createElement("p");
//   product.append(p);
//   p.innerHTML += `5*${i} = ${i * 5}`;
// }
// Declarer une variable et l'incrémenter de 2 jusqu'à 20 et l'afficher dans le HTML
let number = document.getElementById("num");
let num = 0;
// while (num < 22) {
//   number.innerHTML += num;
//   num += 2;
// }
/*
Construire un tab html avec x lignes et y colonnes
Ajouter dans les cellules un contenu de notre choix
Afficher tout sur la page HTML
*/

const tab = [
  {
    nom: "Gaye",
    prenom: "Fabi",
    age: 25,
  },
  {
    nom: "Tra",
    prenom: "Sidy",
    age: 23,
  },
];
// for (i = 0; i < tab.length; i++) {
//   rows = `<td>${tab[i].nom}</td>
//   <td>${tab[i].prenom}</td>
//   <td>${tab[i].age}</td>
//   `;
//   //   table.innerHTML += rows;
// }
// Demander au user x lignes et y colonnes
// Construire le tableau et l'afficher
// let lignes = Number(prompt("Veuillez saisir le nombre de lignes"));
// let colonnes = prompt("Veuillez saisir le nombre de colonnes");
let table = document.getElementById("table");

let rows = document.getElementById("rows");
let ind = 0;
// while (ind < lignes) {
//   table.innerHTML += `<tr>yes</tr> `;
//   ind++;
//   while (ind < colonnes) {
//     table.innerHTML = `<td>oui</td> `;
//     ind++;
//   }
// }
// Insérer dans la page HTML 10 nombres aléatoires sous formes
// de liste à puces
let ul = document.getElementById("ul");
for (i = 0; i < 10; i++) {
  let random = Math.floor(Math.random() * 100);
  //   ul.innerHTML += `<li>${random}</li>`;
  //   console.log(random);
}
// Insérer dans la page HTML 10 nombres aléatoires sous formes entre 0 et 10
// de liste à puces
let txt = document.getElementById("text");
for (i = 0; i < 10; i++) {
  let random = Math.floor(Math.random() * 11);
  //   ul.innerHTML += `<li>${random}</li>`;
  if (random == 10) {
    // txt.innerHTML = `${random} fait partie du tirage`;
    // console.log("10 fait partie du tirage");
  }
  //   console.log(random);
}
// Modifier la bgColor de manière aléatoire
const colors = ["red", "purple", "yellow", "pink", "green", "grey"];
let body = document.querySelector("body");
// for (i = 0; i < colors.length; i++) {
//   let randomColors = Math.floor(Math.random() * colors.length);
//   body.style.backgroundColor = colors[randomColors];
// }
// Insérer des img aléatoires
const img = ["img1.avif", "img2.avif", "img3.avif", "img4.avif"];
for (i = 0; i < img.length; i++) {
  let randomImg = Math.floor(Math.random() * img.length);
  body.innerHTML = `<img src=${img[randomImg]}>`;
}
