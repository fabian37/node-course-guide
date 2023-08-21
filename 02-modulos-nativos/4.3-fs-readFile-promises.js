const fs = require('node:fs/promises')

console.log('Leer el primer archivo')
fs.readFile('./archivo.txt', 'utf-8')
  .then(data => {
    console.log('Primer archivo', data)
  })
  .catch(err => {
    console.error(err)
  })

console.log('Haciendo cosas mientras se lee el archivo')

console.log('Leer el segundo archivo')
fs.readFile('./nombre.txt', 'utf-8')
  .then(data => {
    console.log('Segundo archivo', data)
  })
  .catch(err => {
    console.error(err)
  })
