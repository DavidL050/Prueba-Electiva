//  const http = require('http')
//  const fs = require('fs')

//  const server =http.createServer((req,res) => {
//  const read =  fs.createReadStream('./static/index.html')
// read.pipe(res)
// })

// server.listen(3000)
// console.log('Server on Port 3000')

//  const express = require('express')

//  const app = express()

//  app.get('/',(req,res)=> {
//      res.end('Hello World')
//  })

//  app.get('/about',(req,r es)=> {
//      res.end('about')
//  })

//  app.get('/weather',(req,res)=> {
//      res.end('weather')
//  })

//  app.use((req,res)=> {
//      res.send('No se encontró tu página')
//  })

//  app.listen(3000)
//  console.log('Server on Port')

//  const express = require('express')

//  const app = express()

//  app.get('/products', (req,res) => {
//      res.send('Lista de productos')
//  })

//  app.post('/products', (req,res) => {
//      res.send('Creando productos ')
//  })

//  app.delete('/products', (req,res) => {
//      res.send('Eliminando producto ')
//  })

//  app.patch('/products', (req,res) => {
//      res.send('Actualizando parte del producto ')
//  })

//  app.put('/products', (req,res) => {
//     res.send('Actualizando productos')
// })

// app.listen(3000)
//  console.log('Server on Port')

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/miarchivo", (req, res) => {
//   res.sendFile("./javascript.png", {
//     root: __dirname,
//   });
// });

// app.get("/user", (req, res) => {
//   res.json({
//     nombre: "david",
//     lastname: "leal",
//     age: 40,
//     points: [1, 2, 3],
//     address: {
//       city: "new york",
//       street: "some street 123",
//     },
//   });
// });

// app.listen(3000);
// console.log("Server on Port");

// const express = require("express");
// const app = express();

// app.get("/hello/:username", (req, res) => {
//   console.log(req.params.username);
//   res.send(`Hello ${req.params.username.toUpperCase()}`);
// });

// app.get("/add/:x/:y", (req, res) => {
//   const { x, y } = req.params;
//   res.send(`Result: ${parseInt(x) + parseInt(y)}`);
// });

// app.get("/users/:username/photo", (req, res) => {
//   if (req.params.username === "david") {
//      return res.sendFile("./javascript.png", {
//       root: __dirname,
//     });
//   }

//   res.send('El usuario no tiene acceso')
// });

// app.get('/nombre/:nombre/age/:age',(req,res) =>{
//     res.send(`El usuario ${req.params.nombre} tiene ${req.params.age} años`)
// })
// app.listen(3000);
// console.log("Server on Port");

// const express = require('express')
// const app = express()

// app.all('/info', (req,res)=>{
//     res.send('server info')
// })

// app.listen(3000)
// console.log(`Server On Port ${3000}`)

// const express = require('express')
// const app = express()

// app.listen(3000)
// console.log('Server on port')

// const express = require('express')
// const morgan = require('morgan')

// const app = express()
// const products = [
//     {
//         id: 1,
//         name: "laptop",
//         price: 3000
//     }
//  ]
// app.use(morgan('dev'))

// app.get('/products', (req, res)=>{
//     res.json(products)
// })
// app.post('/products', (req, res)=>{
//     const newProduct = {...req.body, id: products.length + 1}
//     products.push(newProduct)
//     res.send(newProduct)
// })
// app.put('/products', (req, res)=>{
//     res.send('Actualizando productos')
// })
// app.delete('/products', (req, res)=>{
//     res.send('Eliminando productos')
// })
// app.get('/products/:id', (req, res)=>{
//     res.send('Obteniendo un producto')
// })

// app.listen(3000)
// console.log('Server On Port')

// const express = require("express");
// const morgan = require("morgan");
// const path = require("path");

// const app = express();

// app.use(express.json());
// app.use(morgan("dev"));


// app.use("/static", express.static(path.join(__dirname, "static")));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.listen(3000);
// console.log(`Server On Port ${3000}`);


const express = require('express');
const morgan = require('morgan')
const path = require('path')
const ejs = require('ejs')

const app = express()

const UserRoutes = require('./routes/users')
const HomeRoutes = require('./routes/home')

// Settings

app.set('AppName', 'Express Course')
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// Middlewares

app.use(express.json())
app.use(morgan("dev"))

app.use(HomeRoutes)
app.use(UserRoutes)

// Routes

app.use("/public", express.static(path.join(__dirname,'public')))
app.use("/uploads", express.static(path.join(__dirname, 'uploads')))

app.listen(app.get('port'))
console.log(`Server ${app.get('AppName')} on port ${app.get('port')}`)