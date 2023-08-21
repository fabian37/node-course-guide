function hola (nombre) {
  return new Promise((resolve, reject) => {
    if (typeof nombre !== 'string') {
      reject(new Error('¡El nombre debe ser una cadena de texto!'))
    } else {
      setTimeout(() => {
        console.log('Hola ' + nombre)
        resolve(nombre)
      }, 2000)
    }
  })
}

function hablar (nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Bla bla bla bla...')
      resolve(nombre)
    }, 1000)
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

console.log('Iniciando proceso...')

hola('Fabian')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => console.log('Terminado el proceso'))
  .catch((error) => console.error(error))
