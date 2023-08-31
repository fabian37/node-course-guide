import express from 'express'
// import { randomUUID } from 'crypto'
import { readJson } from './utils.js'
import dotenv from 'dotenv'
dotenv.config()

const users = readJson('./users.json')

// Crear una instancia de express
const app = express()

app.use(express.json()) // Middleware que parsea el body de un request si es JSON

let idCounter = users.length

// Obtener todos los usuarios
app.get('/users', (req, res) => {
  if (users.length === 0) {
    return res.status(404).json({ message: 'No hay usuarios registrados' })
  } else {
    res.json(users)
  }
})

// Obtener un usuario por ID
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const user = users.find(user => user.id === id)

  if (!user) {
    return res.status(404).json({ message: 'Usuario no encontrado' })
  } else {
    res.json(user)
  }
})

// Crear un usuario
app.post('/users', (req, res) => {
  if (!req.body.name || !req.body.email) {
    return res.status(400).json({ message: 'Faltan datos' })
  }
  const user = req.body
  user.id = ++idCounter
  users.push(user)
  res.status(201).json(user)
})

// Eliminar un usuario
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = users.findIndex(user => user.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Usuario no encontrado' })
  } else {
    users.splice(index, 1)
    res.status(204).json({ message: 'Usuario eliminado' })
  }
})

// Actualizar un usuario
app.patch('/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const index = users.findIndex(user => user.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Usuario no encontrado' })
  } else {
    users[index] = { ...users[index], ...req.body }
    res.json(users[index])
  }
})

// Iniciar el servidor
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
