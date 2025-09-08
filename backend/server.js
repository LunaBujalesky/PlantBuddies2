const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '..')));
app.use(express.json());

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '..','index.html'));
});

const usuariosRoutes = require('./routes/usuarios.routes.js');
app.use('/usuarios', usuariosRoutes);


app.listen(3000, ()  => {
    console.log("andando...");
});