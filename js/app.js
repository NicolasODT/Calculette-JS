const display = document.getElementById("display");
const nombres = document.querySelectorAll(".nombre");
const operations = document.querySelectorAll(".operation");
const clear = document.getElementById("clear");
const egal = document.getElementById("egal");

// si nombre est cliqué, afficher la valeur du nombre dans le display(input)
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
