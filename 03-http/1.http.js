const http = require('node:http')
const fs = require('node:fs')

const port = process.env.PORT || 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.end('<h1>Bienvenidos a mi página web</h1>')
  } else if (req.url === '/hola') {
    res.end('<h1>Hola mundo</h1>')
  } else if (req.url === '/adios') {
    res.end('<h2>Adios mundo cruel</h2')
  } else if (req.url === '/foto') {
    fs.readFile('./node.png', (err, data) => {
      if (err) {
        res.statusCode = 500 // error
        res.end('<h1>Internal Server Error</h1>')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else {
    res.statusCode = 404
    res.end('<p>Error 404: Not Found</p><a href="/">Ir a inicio</a>')
  }
}

const server = http.createServer(processRequest)

server.listen(port, () => {
  console.log(`El servidor está activo http://localhost:${port}`)
})

// node --watch 03-http/1.http.js -> experimental
// nodemon 03-http/1.http.js -> npm
