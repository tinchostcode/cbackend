
const express= require('express');
const cors = require('cors');
require('dotenv').config();

//Creamos el SERVER EXPRESS
const app= express();

app.use(express.static('public'));

//CORS
app.use(cors());

//LECTURA Y PARSEO DEL BODY
app.use(express.json());

//RUTRAS 
app.use('/api/auth',require('./routes/auth'));

//GET
//app.get('/',()=>{})

/* app.get('/',()=>{
    console.log('Hola como estas')
}) */

   /*  res.status(404).json({
        ok:true,
        msg:'todo ok!',
        uid:1234
    }) */

   /*  res.status(500).json({
        ok:true,
        msg:'problemas con el servidor XD',
        uid:1234
    }) 
})*/

app.listen(4000,() => {
    console.log('SERVER ON');
})