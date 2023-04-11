import { Router } from "express";
import { authentication } from "../controllers/auth.controller";

const router = Router();

router.route('/')
    .post(authentication)

export default router;