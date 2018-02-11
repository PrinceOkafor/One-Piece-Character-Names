<!DOCTYPE html>
<html>
<body>

<h1>Which One Piece Charater are you?</h1>
<button onClick ="newQu()"> Click me</button>
<p id="demo"></p>
</body>
<script>
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
</script>
</html>
