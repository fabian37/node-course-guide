const { saludar, despedir } = require("./saludos.js");
const estudiantes = require("./estudiantes.js");

// Destructuracion de arreglos
const [fabian, juan, pedro] = estudiantes;

saludar(fabian);
despedir(juan);
saludar(pedro);

// Destructuracion de objetos
const persona = {
  nombre: "Fabian",
  apellido: "Gomez",
  edad: 22,
};

const { nombre, apellido, edad } = persona;

console.log(nombre, apellido, edad);
