const http = require('node:http')
const port = process.env.PORT || 3000

// Ejemplo de importación de un archivo JSON, solo funciona con commonJS
const rick = require('./personajes/rick.json')

const server = http.createServer((req, res) => {
  const { url, method } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/':
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1>Esta es una API de Rick and Morty</h1>')
          break
        case '/personajes/rick':
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(rick))
          break
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1>404 - Recurso no encontrado</h1>')
      }
      break
    case 'POST':
      switch (url) {
        case '/personajes': {
          let body = ''
          // Escuchar el evento data
          req.on('data', (chunk) => {
            body += chunk.toString()
          })
          // Escuchar el evento end (cuando termina de recibir datos)
          req.on('end', () => {
            const data = JSON.parse(body)
            // Lógica para guardar el personaje en la base de datos
            res.writeHead(201, { 'Content-Type': 'application/json' })

            data.modified = true
            res.end(JSON.stringify(data))
          })
          break
        }
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.end('<h1>404 - Recurso no encontrado</h1>')
      }
      break
    default:
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/html; charset=utf-8')
      res.end('<h1>404 - Recurso no encontrado</h1>')
  }
})

server.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto http://localhost:${port}`)
})

// res.setHeader('Access-Control-Allow-Origin', '*')
