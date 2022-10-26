let N = parseInt(prompt("scrivi un numero"));

let i = 0;

while (i < N) {
  let array = [];

  let x = 0;

  while (x < 10) {
    array.push(Math.floor(Math.random(10) * 100));

    x++;
  }
  
  let list = document.getElementById("list");

  let li = document.createElement("li");

  li.innerHTML = array;

  list.append(li);
  
  console.log(array);

  i++;
}
