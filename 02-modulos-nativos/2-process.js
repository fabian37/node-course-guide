// dotenv es un módulo que nos permite cargar variables de entorno desde un archivo .env
require('dotenv').config()

const process = require('node:process')

console.log(process.cwd()) // Trae el directorio de trabajo actual
console.log(process.pid) // Trae el id del proceso
console.log(process.arch) // Trae la arquitectura del procesador
console.log(process.platform) // Trae la plataforma del sistema operativo
console.log(process.version) // Trae la version de node

// Variables de entorno
console.log(process.env.NOMBRE)
console.log(process.env.APELLIDO)
console.log(process.env.EDAD)
console.log(process.env.PORT)

if (process.argv[2] === 'dev') {
  console.log('Estás en desarrollo')
}

// Eventos del proceso

process.on('beforeExit', (code) => {
  console.log('El proceso va a terminar')
  console.log(`Código: ${code}`)
})

process.on('exit', (code) => {
  console.log('El proceso terminó')
  console.log(`Código: ${code}`)
})

// ----------------------------

/* process.exit(0); // Termina el proceso
process.exit(1); // Termina el proceso con error */

// ----------------------------

// Windows
// $env:NOMBRE="Juan
// $env:APELLIDO="Perez"
// node app.js

// Linux
// export NOMBRE="Juan"
// export APELLIDO="Perez"
// node app.js

// ----------------------------

// Para ver las variables de entorno
// Windows
// Get-ChildItem Env:NOMBRE

// Linux
// printenv

// ----------------------------

// Para borrar una variable de entorno
// Windows
// Remove-Item Env:NOMBRE

// Linux
// unset NOMBRE

// ----------------------------

// Para ver el valor de una variable de entorno
// Windows
// $env:NOMBRE

// Linux
// echo $NOMBRE

// ----------------------------

// Para crear una variable de entorno
// Windows
// $env:NOMBRE="Juan"

// Linux
// export NOMBRE="Juan"

// ----------------------------

// Otra alternativa es dotenv
// npm install dotenv
