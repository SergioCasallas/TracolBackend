const express=require("express")
const router=express.Router()

const {getDatosActa}=require('../../controllers/Acta/ActaController')

router.post("/",getDatosActa)

module.exports=router;