const express = require("express");
const path = require("path");

const app = express(); 

const publicPath = path.resolve(__dirname, "./public")
// Espectificamos en donde estara la ruta de archivos estaticos 

app.use(express.static(publicPath))

//app.listen(3000, () => {
//    console.log("Servidor corriendo en el puerto 3000")
//})

// Para que funcione en heroku

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})



app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"));
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"));
})