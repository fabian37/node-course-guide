// window es el objeto global en el navegador
// console.log(window)
// window.console | window.document | window.alert | window.setTimeout

// global es el objeto global en Node
// console.log(global)

// NUEVA OPCION: globalThis es el objeto global en ambos
// console.log(globalThis)

console.log("1. Esto se ejecuta de inmediato");

setTimeout(() => {
  console.log("2. Esto se ejecuta despues de 3 segundos");
}, 3000);

console.log("3. Esto se ejecuta de inmediato tambien");
