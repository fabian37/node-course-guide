const express = require('express')

const app = express()

app.use(express.json()) // Middleware que parsea el body de un request si es JSON
app.disable('x-powered-by') // Deshabilita el header X-Powered-By: Express

app.get('/', (req, res) => {
  res.json({ message: 'Hola mundo' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
