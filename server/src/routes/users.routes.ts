import { Router } from "express";

const router = Router();
import { getUsers } from "../controllers/users.controller";

router.route('/')
    .get(getUsers);

export default router;