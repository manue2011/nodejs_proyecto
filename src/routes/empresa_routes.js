import { Router } from "express";
import { getempresas, createempresas, updateempresas, deleteempresas,getempresa } from "../controllers/empresa_controller.js";
let router=Router()


router.get("/empresas",getempresas)

router.get("/empresas/:id_empresa",getempresa)

router.post("/empresas",createempresas)
router.patch("/empresas/:id_empresa",updateempresas)
router.delete("/empresas/:id_empresa",deleteempresas)


export default router;