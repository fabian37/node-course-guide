const fs = require('node:fs/promises')

async function main () {
  try {
    console.log('Leer el primer archivo')
    const primerArchivo = await fs.readFile('./archivo.txt', 'utf-8')
    console.log('Primer archivo', primerArchivo)

    console.log('Haciendo cosas mientras se lee el archivo')

    console.log('Leer el segundo archivo')
    const segundoArchivo = await fs.readFile('./nombre.txt', 'utf-8')
    console.log('Segundo archivo', segundoArchivo)
  } catch (err) {
    console.error(err)
  }
}

main()
