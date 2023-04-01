const display = document.getElementById("display");
const nombres = document.querySelectorAll(".nombre");
const operations = document.querySelectorAll(".operation");
const clear = document.getElementById("clear");
const egal = document.getElementById("egal");

// display.value permet de récupérer la valeur du display(input)

// fonction qui permet de gérer les touches du clavier
function keyPress(key) {
  if (key >= "0" && key <= "9") {
    // Si la touche est un nombre
    display.value += key;
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    // Si la touche est une opération
    display.value += key;
  } else if (key === "Enter" || key === "=") {
    // Si la touche est Entrée ou égal
    display.value = eval(display.value);
  } else if (key === "Escape" || key === "c" || key === "C") {
    // Si la touche est Échap, c ou C on remet le display à NULL
    display.value = "";
  } else if (key === "Backspace" || key === "Delete") {
    display.value = display.value.slice(0, -1);
    // slice permet de couper une partie de la chaine de caractère pour la remplacer par une autre on met 0 et -1 pour dire qu'on veut tout sauf le dernier caractère
  }
}
// fonction qui permet de gérer les touches du clavier
document.addEventListener("keyup", (e) => {
  keyPress(e.key); // e.key permet de récupérer la touche du clavier qui a été pressée
});

// si un nombre est cliqué, afficher la valeur du nombre dans le display(input)
nombres.forEach((nombre) => {
  nombre.addEventListener("click", () => {
    display.value += nombre.value; // value permet de récupérer la valeur de l'élément
  });
});

// si operation est cliqué, afficher la valeur de l'operation dans le display(input)
operations.forEach((operation) => {
  operation.addEventListener("click", () => {
    display.value += operation.value; // += permet d'ajouter la valeur de l'élément à la valeur du display
  });
});

// si clear est cliqué, effacer le display(input)
clear.addEventListener("click", () => {
  display.value = ""; // "" permet d'effacer le display
});

// si egal est cliqué, afficher le résultat de l'operation dans le display(input)
egal.addEventListener("click", () => {
  display.value = eval(display.value); // eval() permet d'évaluer une expression, c'est lui qui fais le calcul.
});
