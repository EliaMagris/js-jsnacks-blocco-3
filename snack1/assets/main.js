let array = [];

let somma = 0;

let i = 0;

while (somma < 50) {
  let numbers = parseInt(prompt("inserisci un numero"));

  somma = somma + numbers;

  array.push(somma);

  i++;
}

console.log(array);
