const fs = require('node:fs')

console.log('Leer el primer archivo')
fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
  }
  console.log('Primer archivo', data)
})

console.log('Haciendo cosas mientras se lee el archivo')

console.log('Leer el segundo archivo')
fs.readFile('./nombre.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
  }
  console.log('Segundo archivo', data)
})
