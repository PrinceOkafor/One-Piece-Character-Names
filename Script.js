var onePiece = [
  "Luffy",
  "Nami",
  "Sanji",
  "Chopper",
  "Usop",
  "Frankey",
  "Zoro",
  "Nico Robbin",
  "Brook",
  "Jimbee"
];
function newQu() {
var randomName = onePiece [Math.floor(Math.random()* onePiece.length)];
document.getElementById('demo'). innerHTML = randomName;
}
