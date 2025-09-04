const express = require('express');
const router = express.Router();
const { crearUsuario } = require('../controllers/usuarios.controller.js');

router.post('/', crearUsuario);

module.exports = router;