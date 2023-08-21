function hola (nombre) {
  return new Promise((resolve, reject) => {
    if (typeof nombre !== 'string') {
      reject(new Error('El nombre no es una cadena de texto'))
    } else {
      setTimeout(() => {
        console.log('Hola ' + nombre)
        resolve(nombre)
      }, 3000)
    }
  })
}

function hablar (nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla bla...')
      resolve(nombre)
    }, 2000)
  })
}

function adios (nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Adios ' + nombre)
      resolve(nombre)
    }, 1000)
  })
}

async function conversacion () {
  const nombre = await hola('Fabian')
  await hablar()
  await hablar()
  await hablar()
  await adios(nombre)
  console.log('Terminando proceso...')
}

console.log('Iniciando proceso...')
conversacion()
