const http = require('node:http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  console.log(req.url)
  res.end('Hola mundo')
})

server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
