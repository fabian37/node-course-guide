const fs = require('node:fs')

console.log('Leer el primer archivo')
const data = fs.readFileSync('./archivo.txt', 'utf-8')

console.log('Primer archivo', data)

console.log('Haciendo cosas mientras se lee el archivo')

console.log('Leer el segundo archivo')
const data2 = fs.readFileSync('./nombre.txt', 'utf-8')

console.log('Segundo archivo', data2)
