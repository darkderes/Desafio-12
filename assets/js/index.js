// Ejercicio 1 - poner un borde rojo a la imagen al hacer click y que se quite al hacer click de nuevo

const img = document.querySelector("img");
let border = false;
img.addEventListener("click", () => {
  if (border) {
    img.style.border = "none";
    border = false;
  } else {
    img.style.border = "2px solid #d22b2b";
    border = true;
  }
});

// Ejercicio 2 - tomar los 3 inputs y validar que no sean mayor a 10 los valores ingresados

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");

const buttonCalculate = document.getElementById("btn_calcular");

const mensaje = document.getElementById("mensaje");
mensaje.innerHTML = "Ingrese los números y haga click en calcular";

buttonCalculate.addEventListener("click", () => {
  
  // const input1 = parseInt(number1.value) || 0;
  //  const input2 = parseInt(number2.value) || 0;
  //  const input3 = parseInt(number3.value) || 0;

  let input1 = 0;
  let input2 = 0;
  let input3 = 0;

  if (!isNaN(parseInt(number1.value))) {
    input1 = parseInt(number1.value);
  } else {
    mensaje.innerHTML = "Ingrese un número válido en el campo 1";
    return;
  }

  if (!isNaN(parseInt(number2.value))) {
    input2 = parseInt(number2.value);
  } else {
    mensaje.innerHTML = "Ingrese un número válido en el campo 2";
    return;
  }

  if (!isNaN(parseInt(number3.value))) {
    input3 = parseInt(number3.value);
  } else {
    mensaje.innerHTML = "Ingrese un número válido en el campo 3";
    return;
  }

  const total = input1 + input2 + input3;

  console.log("Total:", total); // Muestra el total calculado

  if (total > 10) {
    mensaje.innerHTML = "Lleva demasiado stickers, no puedes llevar más de 10";
  } else {
    mensaje.innerHTML = "Lleva " + total + " stickers";
  }
});

// Ejercicio 3 - verificar valores de select y mostrar mensaje

const select = document.getElementById("serie1");
const select2 = document.getElementById("serie2");
const select3 = document.getElementById("serie3");

const buttonCheck = document.getElementById("btn_serial");

const mensaje2 = document.getElementById("mensaje2");

buttonCheck.addEventListener("click", () => {
  if (select.value === "9" && select2.value === "1" && select3.value === "1") {
    mensaje2.innerHTML = "Password 1 correcto";
  } else if (
    select.value === "7" &&
    select2.value === "1" &&
    select3.value === "4"
  ) {
    mensaje2.innerHTML = "Password 2 correcto";
  } else {
    mensaje2.innerHTML = "Password incorrecto";
  }
});
