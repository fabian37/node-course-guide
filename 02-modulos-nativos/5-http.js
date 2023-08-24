const http = require('node:http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  console.log('Petición recibida:', req.url)
  res.end('Hola mundo')
})

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})

// server.listen(0, () => {
//   console.log(`El servidor está activo http://localhost:${server.address().port}`)
// })
