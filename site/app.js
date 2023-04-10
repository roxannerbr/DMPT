
/* Entry point */
let express= require('express')
let path=require('path')
let app= express() /* funcion de alto nivel */
let port =3000 /* puerto */

app.get('/',(req,res)=>res.send("Bienvenidos a De mi para ti"))

/* __dirname nos devuelve la ubicacion del proyecto */
app.get('/inicio', (req,res)=>res.sendFile(path.join(__dirname,'views','inicio.html')))
app.get('/home', (req,res)=>res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/categorias', (req,res)=>res.sendFile(path.join(__dirname,'views','categorias.html')))
app.get('/contactanos', (req,res)=>res.sendFile(path.join(__dirname,'views','contactanos.html')))
app.get('/pregfrec', (req,res)=>res.sendFile(path.join(__dirname,'views','pregfrec.html')))
app.get('/about', (req,res)=>res.sendFile(path.join(__dirname,'views','about.html')))
app.get('/novedades', (req,res)=>res.sendFile(path.join(__dirname,'views','novedades.html')))


/*Requerir Rutas */

let dirname=path.join(__dirname,'views')

app.use(express.static(path.resolve(__dirname,'public')))

/* Levantamos el servidor con app listen */
app.listen(port,function(){
  return console.log(`Se levanta el servidor en http://localhost:${port}`)
});




