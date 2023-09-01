const {response}= require('express');



const crearUsuario = (req,res = response)=>{
    
    const{name,edad,dni} = req.body; // destructuracion
    console.log(name,edad,dni)
    
    //console.log(req.body);

    return res.json({
        ok:true,
        msg:'Crear Usuario /new'
    });
}
//////////////////////////////////////////////////
const loginUsuario = (req,res = response)=>{

    return res.json({
        ok:true,
        msg:'Login Usuario /new'
    });
}
//////////////////////////////////////////////////

const renewUsuario = (req,res)=>{

    return res.json({
        ok:true,
        msg:'Renew Usuario /renew'
    });
}

module.exports = {
    crearUsuario,
    loginUsuario,
    renewUsuario
}