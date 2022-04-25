const db=require("../../db/db")
const datosActa_query=require("../../query/datosActa_query/datosActa_query.js")

exports.getDatosActa=(request,response)=>{
    const {numeroTRA,codigoVerificacion}=request.body
try{
if(numeroTRA&&codigoVerificacion){

    db.query(datosActa_query.getDatosActa(numeroTRA,codigoVerificacion),(error,res)=>{
        if(error)console.log(error)

        if(res!==undefined&&res.length>0){
            response.json(res)
            response.end()
        }else{response.json({mensaje:"dato no encontrado"})
            response.end()
    } 
    })

}else{response.json({
  mensaje:
    "Su acta no fue verificada por favor valide sus datos e intente nuevamente..",
});
response.end()

}
} catch(e){
    console.log(e)
}
}
