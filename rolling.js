function Rolling() {
  let rolledNumber = Math.floor(Math.random() * document.getElementById("input").value) + 1;
  document.getElementById("output").innerHTML = rolledNumber;
};