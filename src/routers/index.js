const { Router } = require('express');
const router = Router();
const UsuarioController= require('../controller/UsuarioController');
const Usuario = require('../model/usuario');
/* router.get("/", UsuarioController.index); */
router.post("/usuarios",UsuarioController.create);
router.get("/usuarios", UsuarioController.findAll);
module.exports = router;