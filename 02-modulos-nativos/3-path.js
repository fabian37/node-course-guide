const path = require('node:path')

// __dirname y __filename sirven para saber la ruta absoluta del archivo, sin embargo no existen en los módulos de ES6
console.log(__dirname)
console.log(__filename)

// barra separadora de carpetas segun SO, en linux es / y en windows es \
console.log(path.sep)

// path.dirname() nos permite obtener el directorio de un archivo
const directory = path.dirname('home/user/dir/file.txt')
console.log(directory)

// path.basename() nos permite obtener el nombre de un archivo
const filename = path.basename('home/user/dir/file.txt', '.txt')
console.log(filename)

// path.extname() nos permite obtener la extensión de un archivo
const extension = path.extname('home/user/dir/file.txt')
console.log(extension)

// path.join() nos permite unir rutas
const join = path.join('home', 'user', 'dir', 'file.txt')
console.log(join)

// Ejemplo utilizando __dirname y __filename
console.log(path.basename(__dirname))
console.log(path.basename(__filename))

// ¿Cuál es la diferencia entre una ruta absoluta y una ruta relativa?

// Una ruta absoluta es la ruta completa desde el root del sistema operativo hasta el archivo, por ejemplo: /home/user/dir/file.txt
// Una ruta relativa es la ruta desde el archivo actual hasta el archivo, por ejemplo: ./file.txt
