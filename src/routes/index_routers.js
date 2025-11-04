import { Router } from "express";

import { ping } from "../controllers/index_controller.js";
let router=Router()

router.get("/ping",ping)

export default router;
