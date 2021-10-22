const express = require("express");
const hbs = require("hbs")
const app = express();
const port = 3000;

// CONTENIDO DINAMICO HANDLEBARS
// motor de plantillas
app.set("view engine", "hbs")


// CONTENIDO ESTATICO 
// Esta carpeta public va a tener prioridad sobre el resto de las carpetas
// use tiene prioridad sobre get
app.use(express.static("public"))  //cuando uso hbs a static lo dejo ya que tengo contenido estatico para mostrar

// solo renderise el index
app.get("/",(req,res)=>{
    res.render("index")
});


//ruta para que me lleve a otra pagina dentro de public ya que por defecto me lleva a index.html
// app.get("/pag_int.html/registrarse", (req, res)=>{
//     res.sendFile(__dirname + "/public/pag_int.html/registrarse.html")
// })

app.get("/",(req,res)=>{
    res.send("Estoy conectado")
});


app.get("*", (req,res)=>{
    res.send("");
})

app.listen(port, ()=> {
    console.log(`Estoy corriendo en le puerto: ${port}`)
});