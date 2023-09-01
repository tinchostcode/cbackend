const {Router} = require('express');
const { crearUsuario, loginUsuario,renewUsuario} = require('../controllers/auth');
const { check } = require('express-validator');

const router= Router();

//CREAR USUARIO.
router.post('/new',crearUsuario);

/////////////////////////////////////////////////////////

//LOGIN USUARIO.
router.post('/',[

    check('email','El mail es obligatorio').isEmail(),

],loginUsuario);

/////////////////////////////////////////////////////////

//validad token
router.get('/renew',renewUsuario);

module.exports=router;