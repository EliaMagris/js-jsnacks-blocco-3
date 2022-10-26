let array = ["elia", "roberto", "paolo", "marco", "luca"];

let name = prompt("scrivi il tuo nome");

console.log(array);

let soldatino = true;

let i = 0;

while (i < array.length) {
  if (name == array[i]) {
    soldatino = false;
    break;
  }

  i++;
}

if (soldatino == false) {
  document.getElementById("result").innerText = "Benvenuto Boss";
  
} else {
  document.getElementById("result").innerText = "Vai via";
}
