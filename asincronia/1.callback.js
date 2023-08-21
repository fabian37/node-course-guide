// Ejemplo de callback hell

function hola (nombre, miCallback) {
  setTimeout(() => {
    console.log('Hola ' + nombre)
    miCallback(nombre)
  }, 2000)
}

function hablar (callbackHablar) {
  setTimeout(() => {
    console.log('Bla bla bla bla...')
    callbackHablar()
  }, 1000)
}

function adios (nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios ' + nombre)
    otroCallback()
  }, 1000)
}

console.log('Iniciando proceso...')
hola('Fabian', (nombre) => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        adios(nombre, () => {
          console.log('Terminando proceso...')
        })
      })
    })
  })
})
