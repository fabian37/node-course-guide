const express = require('express')
const rick = require('./personajes/rick.json')

const PORT = process.env.PORT || 3000

const app = express()

app.disable('x-powered-by')

app.use(express.json())

/* Esto es un middleware pero ya existe en express -> express.json()
app.use((req, res, next) => {
  if (req.method !== 'POST') next()
  if (req.headers['content-type'] !== 'application/json') next()

  // Solo llegan request que son POST y que tienen el header content-type: application/json
  let body = ''
  req.on('data', (chunk) => {
    body += chunk.toString()
  })
  req.on('end', () => {
    const data = JSON.parse(body)
    // mutar el request y meter la información en el req.body
    req.body = data
    next()
  })
})
*/

app.get('/', (req, res) => {
  console.log(req.url)
  res.send('<h1>Esta es una API de Rick and Morty</h1>')
})

app.get('/personajes/rick', (req, res) => {
  res.json(rick)
})

app.post('/personajes', (req, res) => {
  // con el req.body deberiamos guardar en una base de datos
  res.status(201).json(req.body)
})

// La última ruta a la va a la que se llega si no se encuentra ninguna ruta
app.use((req, res) => {
  res.status(404).send('<h1>404 - Recurso no encontrado</h1>')
})

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`)
})
